import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Ime mora imati najmanje 2 znaka")
    .max(100, "Ime je predugačko"),
  email: z.string().email("Unesite ispravnu e-mail adresu"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\+\-\/\(\)]{7,20}$/.test(val),
      "Unesite ispravan broj telefona"
    ),
  message: z
    .string()
    .min(10, "Poruka mora imati najmanje 10 znakova")
    .max(2000, "Poruka je predugačka"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
