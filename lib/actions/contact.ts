"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";
import { SITE } from "@/lib/constants/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: "Nevažeći podaci obrasca. Molimo provjerite unos.",
    };
  }

  const { name, email, phone, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Elektro Artis <onboarding@resend.dev>",
      to: SITE.email,
      replyTo: email,
      subject: `Nova poruka s web stranice od ${name}`,
      text: `Ime: ${name}\nE-mail: ${email}\nTelefon: ${phone || "nije navedeno"}\n\nPoruka:\n${message}`,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Došlo je do pogreške pri slanju poruke. Molimo pokušajte ponovo.",
    };
  }
}
