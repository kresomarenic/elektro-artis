#!/usr/bin/env node
// Price list (cjenik) tooling. data/cjenik.json is the single source of truth;
// published CSVs in public/cjenici/ are generated from it and never deleted.
//
//   node scripts/cjenik.mjs check                 verify published CSV matches the JSON (runs on prebuild)
//   node scripts/cjenik.mjs objavi [--od <ISO>]   publish a new CSV if prices changed (default: now, Europe/Zagreb)
//
// Legal basis: NN 101/2026 (Odluka o objavi cjenika, Odluka o isticanju dodatne cijene).

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "data/cjenik.json");
const OUT_DIR = join(ROOT, "public/cjenici");

const HEADER =
  "naziv_usluge,obracun,maloprodajna_cijena_eur,posebni_oblik_prodaje,naziv_posebnog_oblika_prodaje,sidrena_cijena_eur_10_09_2026";

const quote = (s) => `"${String(s).replace(/"/g, '""')}"`;
const amount = (n) => Number(n).toFixed(2);

export function toCsv(stavke) {
  const rows = stavke.map((s) =>
    [
      quote(s.naziv),
      quote(s.obracun),
      amount(s.cijena),
      s.posebni_oblik ? "DA" : "NE",
      s.posebni_oblik ? quote(s.posebni_oblik) : "",
      amount(s.sidrena_cijena),
    ].join(",")
  );
  return [HEADER, ...rows].join("\n") + "\n";
}

// "2026-10-01T07:45" -> "01.10.2026_07-45" (colon replaced: not allowed in Windows filenames)
function stamp(iso) {
  const [date, time] = iso.split("T");
  const [y, m, d] = date.split("-");
  return `${d}.${m}.${y}_${time.slice(0, 5).replace(":", "-")}`;
}

function fileName(objekt, redniBroj, iso) {
  const n = String(redniBroj).padStart(3, "0");
  return `${objekt.oblik}_${objekt.adresa}_${objekt.oznaka}_${n}_${stamp(iso)}.csv`;
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

function anchorsOf(csv) {
  // Names are always quoted and never contain '",' so a simple split is safe here.
  return new Map(
    csv.trim().split("\n").slice(1).map((line) => {
      const name = line.slice(1, line.indexOf('",'));
      return [name, line.slice(line.lastIndexOf(",") + 1)];
    })
  );
}

function load() {
  return JSON.parse(readFileSync(DATA, "utf8"));
}

function check({ quiet = false } = {}) {
  const data = load();
  const errors = [];

  for (const s of data.stavke) {
    if (!s.sidrena_datum) errors.push(`"${s.naziv}": nedostaje sidrena_datum`);
  }
  for (const iz of data.izdanja) {
    if (!existsSync(join(OUT_DIR, iz.datoteka))) errors.push(`nedostaje arhivska datoteka: ${iz.datoteka}`);
  }

  const latest = data.izdanja.at(-1);
  const latestPath = latest && join(OUT_DIR, latest.datoteka);
  if (latestPath && existsSync(latestPath)) {
    const published = readFileSync(latestPath, "utf8");
    if (published !== toCsv(data.stavke)) {
      errors.push(`data/cjenik.json se razlikuje od objavljenog CSV-a (${latest.datoteka}). Pokreni: pnpm cjenik:objavi`);
    }
    // Anchor price must never change for a service that was already published.
    const published_anchors = anchorsOf(published);
    for (const s of data.stavke) {
      const prev = published_anchors.get(s.naziv);
      if (prev !== undefined && prev !== amount(s.sidrena_cijena)) {
        errors.push(`"${s.naziv}": sidrena cijena promijenjena (${prev} -> ${amount(s.sidrena_cijena)}); ne smije se mijenjati`);
      }
    }
  }

  if (errors.length) {
    console.error("cjenik: provjera nije prošla\n  - " + errors.join("\n  - "));
    process.exit(1);
  }
  if (!quiet) console.log(`cjenik: OK (${data.stavke.length} stavki, ${data.izdanja.length} izdanja)`);
}

function objavi(args) {
  const data = load();
  mkdirSync(OUT_DIR, { recursive: true });
  const csv = toCsv(data.stavke);
  const latest = data.izdanja.at(-1);

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
  // Anchor check against the previous issue before writing anything.
  if (latest) {
    const prev = anchorsOf(readFileSync(join(OUT_DIR, latest.datoteka), "utf8"));
    for (const s of data.stavke) {
      const p = prev.get(s.naziv);
      if (p !== undefined && p !== amount(s.sidrena_cijena)) {
        console.error(`cjenik: "${s.naziv}": sidrena cijena se ne smije mijenjati (${p})`);
        process.exit(1);
      }
    }
  }

  const datoteka = fileName(data.objekt, data.izdanja.length + 1, od);
  writeFileSync(join(OUT_DIR, datoteka), csv);
  data.izdanja.push({ datoteka, vrijedi_od: od });
  writeFileSync(DATA, JSON.stringify(data, null, 2) + "\n");
  console.log(`cjenik: objavljeno ${datoteka} (vrijedi od ${od}; mora biti online do 08:00 tog dana)`);
  check();
}

const [cmd, ...rest] = process.argv.slice(2);
if (cmd === "objavi") objavi(rest);
else if (cmd === "check" || cmd === undefined) check();
else {
  console.error(`cjenik: nepoznata naredba "${cmd}"`);
  process.exit(1);
}
