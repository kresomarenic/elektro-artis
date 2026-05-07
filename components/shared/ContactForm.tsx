"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/actions/contact";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      const res = await sendContactEmail(data);
      setResult(res);
      if (res.success) reset();
    });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue text-text placeholder:text-muted text-sm transition-colors duration-200";

  const errorClass = "mt-1 text-xs text-red-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Vaše ime i prezime *"
          className={inputClass}
          disabled={isPending}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="E-mail adresa *"
          className={inputClass}
          disabled={isPending}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Broj telefona (nije obavezno)"
          className={inputClass}
          disabled={isPending}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Opišite problem ili upit *"
          rows={5}
          className={`${inputClass} resize-none`}
          disabled={isPending}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {result && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg text-sm ${
            result.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {result.success ? (
            <>
              <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <span>
                Poruka je uspješno poslana! Javit ćemo Vam se u najkraćem roku.
              </span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <span>{result.error}</span>
            </>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Slanje...
          </>
        ) : (
          "Pošalji poruku"
        )}
      </button>
    </form>
  );
}
