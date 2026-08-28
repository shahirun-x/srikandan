"use server";

export interface ContactState {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (message.length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  // Integration point: wire this to email/CRM. For now we log server-side.
  console.log("[contact] new enquiry", { name, email, phone, message });

  // Simulate a little latency so the pending UI is visible.
  await new Promise((r) => setTimeout(r, 600));

  return {
    ok: true,
    message: "Thanks — your message has been received. We'll be in touch shortly.",
  };
}
