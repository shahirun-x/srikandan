"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useToast } from "@/components/ui/Toast";
import { submitContact, type ContactState } from "@/app/actions";
import { COMPANY } from "@/lib/constants";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const initialState: ContactState = { ok: false, message: "" };

interface FieldProps {
  id: "name" | "email" | "phone" | "message";
  label: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}

function Field({ id, label, type = "text", textarea, error }: FieldProps) {
  const shared =
    "peer w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-base text-navy outline-none transition-colors placeholder-transparent focus:border-teal";
  const border = error ? "border-red-400" : "border-navy/15";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          placeholder={label}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(shared, border, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(shared, border)}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-semibold uppercase tracking-wide text-slate-text transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-text/70 peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-teal-dark"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Send Message"}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const { notify } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const lastHandled = useRef<ContactState | null>(null);

  useEffect(() => {
    if (state === lastHandled.current || !state.message) return;
    lastHandled.current = state;
    if (state.ok) {
      notify("success", state.message);
      formRef.current?.reset();
    } else if (state.message) {
      notify("error", state.message);
    }
  }, [state, notify]);

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Get in touch"
          title="Let's talk about your IT"
          description="Tell us what you're planning. We'll get back to you with a clear, practical next step."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* form */}
          <motion.form
            ref={formRef}
            action={formAction}
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
            noValidate
          >
            <motion.div variants={fadeUp}>
              <Field id="name" label="Name" error={state.errors?.name} />
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" type="email" error={state.errors?.email} />
              <Field id="phone" label="Phone Number" type="tel" error={state.errors?.phone} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Field id="message" label="Message" textarea error={state.errors?.message} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SubmitButton />
            </motion.div>
          </motion.form>

          {/* details + map */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-5 rounded-2xl border border-navy/10 bg-light-gray p-7">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-text">
                    Address
                  </p>
                  <p className="mt-1 text-sm text-navy">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-text">
                    Phone
                  </p>
                  <p className="mt-1 flex flex-col text-sm text-navy">
                    <a className="hover:text-teal-dark" href={COMPANY.phonePrimaryHref}>
                      {COMPANY.phonePrimary}
                    </a>
                    <a className="hover:text-teal-dark" href={COMPANY.phoneSecondaryHref}>
                      {COMPANY.phoneSecondary}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-text">
                    Email
                  </p>
                  <a
                    className="mt-1 block text-sm text-navy hover:text-teal-dark"
                    href={`mailto:${COMPANY.email}`}
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-text">
                    Website
                  </p>
                  <a
                    className="mt-1 block text-sm text-navy hover:text-teal-dark"
                    href={COMPANY.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {COMPANY.website}
                  </a>
                </div>
              </li>
            </ul>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy/10 shadow-card sm:aspect-[16/10]">
              <iframe
                title="Sri Kandan Solutions location — Saidapet, Chennai"
                src={COMPANY.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
