#!/usr/bin/env node
// Price list (cjenik) tooling. data/cjenik.json is the single source of truth;
// published CSVs in public/cjenici/ are generated from it and never edited by hand.
//
//   node scripts/cjenik.mjs check                 verify published CSV matches the JSON (runs on prebuild)
//   node scripts/cjenik.mjs objavi [--od <ISO>]   publish a new CSV if prices changed (default: now, Europe/Zagreb)
//
// Legal basis (in force 17. 11. 2026.):
//   - Pravilnik o načinu objave cjenika proizvoda (NN 132/2026) — file format, name, columns
//   - Pravilnik o isticanju bazne cijene proizvoda (NN 132/2026) — base price = price on 10. 9. 2026.
// The earlier Government decisions (NN 101/2026, 110/2026) ceased to apply on 17. 11. 2026.
//
// Format (Pravilnik o načinu objave cjenika, čl. 3 st. 3-4, čl. 6):
//   - services list columns, in this order: naziv usluge; maloprodajna cijena + posebni oblik prodaje; bazna cijena
//   - UTF-8, columns separated by ';'
//   - file name: OIB _ ZA_SVA_PRODAJNA_MJESTA _ usluge _ broj pohrane _ GGGGMMDD_SSMM
//   - a changed list must be online by 11:00 on the day of the change; the replaced one stays
//     available for at least 15 days (we keep every issue permanently)
// Issues marked "stari_format" were published under the repealed NN 101/2026 decisions and are kept
// only as an archive; the storage number (broj pohrane) counts new-format issues only.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "data/cjenik.json");
const OUT_DIR = join(ROOT, "public/cjenici");

const SEP = ";";
const HEADER = ["naziv_usluge", "maloprodajna_cijena_eur", "posebni_oblik_prodaje", "bazna_cijena_eur"].join(SEP);

const quote = (s) => `"${String(s).replace(/"/g, '""')}"`;
const amount = (n) => Number(n).toFixed(2);

// The services list has no separate unit column, so the billing unit is part of the service name.
export const csvName = (s) => `${s.naziv} (${s.obracun})`;

export function toCsv(stavke) {
  const rows = stavke.map((s) =>
    [quote(csvName(s)), amount(s.cijena), s.posebni_oblik ? "DA" : "NE", amount(s.sidrena_cijena)].join(SEP)
  );
  return [HEADER, ...rows].join("\n") + "\n";
}

// "2026-11-19T10:30" -> "20261119_1030"
function stamp(iso) {
  const [date, time] = iso.split("T");
  return `${date.replace(/-/g, "")}_${time.slice(0, 5).replace(":", "")}`;
}

function fileName(objekt, brojPohrane, iso) {
  const n = String(brojPohrane).padStart(3, "0");
  return `${objekt.oib}_${objekt.prodajno_mjesto}_${objekt.vrsta}_${n}_${stamp(iso)}.csv`;
}

function nowZagreb() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Zagreb",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date()).map((x) => [x.type, x.value])
  );
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
}

// Name -> base price from a published CSV, in either the old (',') or the new (';') format.
// Names are always quoted first fields and never contain '"<sep>', so a simple split is safe here.
function anchorsOf(csv) {
  const [header, ...lines] = csv.trim().split("\n");
  const sep = header.includes(";") ? ";" : ",";
  return new Map(
    lines.map((line) => [line.slice(1, line.indexOf(`"${sep}`)), line.slice(line.lastIndexOf(sep) + 1)])
  );
}

// Base price must never change for a service that was already published (under its old or new name).
function anchorErrors(data) {
  const errors = [];
  for (const iz of data.izdanja) {
    const path = join(OUT_DIR, iz.datoteka);
    if (!existsSync(path)) continue;
    const anchors = anchorsOf(readFileSync(path, "utf8"));
    for (const s of data.stavke) {
      const prev = anchors.get(csvName(s)) ?? anchors.get(s.naziv);
      if (prev !== undefined && prev !== amount(s.sidrena_cijena)) {
        errors.push(`"${s.naziv}": bazna cijena promijenjena (${prev} -> ${amount(s.sidrena_cijena)} u odnosu na ${iz.datoteka}); ne smije se mijenjati`);
      }
    }
  }
  return errors;
}

const current = (data) => data.izdanja.filter((iz) => !iz.stari_format);

function load() {
  return JSON.parse(readFileSync(DATA, "utf8"));
}

function check({ quiet = false } = {}) {
  const data = load();
  const errors = [];

  for (const key of ["oib", "prodajno_mjesto", "vrsta"]) {
    if (!data.objekt?.[key]) errors.push(`objekt.${key} nedostaje`);
  }
  for (const s of data.stavke) {
    if (!s.sidrena_datum) errors.push(`"${s.naziv}": nedostaje sidrena_datum`);
  }
  for (const iz of data.izdanja) {
    if (!existsSync(join(OUT_DIR, iz.datoteka))) errors.push(`nedostaje arhivska datoteka: ${iz.datoteka}`);
  }

  const latest = current(data).at(-1);
  if (!latest) {
    errors.push("nema objavljenog cjenika u formatu NN 132/2026. Pokreni: pnpm cjenik:objavi");
  } else {
    const latestPath = join(OUT_DIR, latest.datoteka);
    if (existsSync(latestPath) && readFileSync(latestPath, "utf8") !== toCsv(data.stavke)) {
      errors.push(`data/cjenik.json se razlikuje od objavljenog CSV-a (${latest.datoteka}). Pokreni: pnpm cjenik:objavi`);
    }
  }
  errors.push(...anchorErrors(data));

  if (errors.length) {
    console.error("cjenik: provjera nije prošla\n  - " + errors.join("\n  - "));
    process.exit(1);
  }
  if (!quiet) console.log(`cjenik: OK (${data.stavke.length} stavki, važeći: ${latest.datoteka})`);
}

function objavi(args) {
  const data = load();
  mkdirSync(OUT_DIR, { recursive: true });
  const csv = toCsv(data.stavke);
  const latest = current(data).at(-1);

  // Bootstrap: latest issue is recorded but its file was never written.
  if (latest && !existsSync(join(OUT_DIR, latest.datoteka))) {
    writeFileSync(join(OUT_DIR, latest.datoteka), csv);
    console.log(`cjenik: zapisano ${latest.datoteka}`);
    return check();
  }
  if (latest && readFileSync(join(OUT_DIR, latest.datoteka), "utf8") === csv) {
    console.log("cjenik: nema promjena, nova datoteka nije potrebna");
    return;
  }

  const odIdx = args.indexOf("--od");
  const od = odIdx >= 0 ? args[odIdx + 1] : nowZagreb();
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(od ?? "")) {
    console.error("cjenik: --od mora biti u obliku YYYY-MM-DDTHH:mm");
    process.exit(1);
  }
  const errors = anchorErrors(data);
  if (errors.length) {
    console.error("cjenik: " + errors.join("\ncjenik: "));
    process.exit(1);
  }

  const datoteka = fileName(data.objekt, current(data).length + 1, od);
  writeFileSync(join(OUT_DIR, datoteka), csv);
  data.izdanja.push({ datoteka, vrijedi_od: od });
  writeFileSync(DATA, JSON.stringify(data, null, 2) + "\n");
  console.log(`cjenik: objavljeno ${datoteka} (vrijedi od ${od}; mora biti online najkasnije do 11:00 tog dana)`);
  check();
}

const [cmd, ...rest] = process.argv.slice(2);
if (cmd === "objavi") objavi(rest);
else if (cmd === "check" || cmd === undefined) check();
else {
  console.error(`cjenik: nepoznata naredba "${cmd}"`);
  process.exit(1);
}
