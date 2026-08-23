import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { contact, contactServiceOptions } from "../../data/agency";

const initialForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: contactServiceOptions[0],
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-line bg-navy-800 px-4 py-3 text-[15px] text-white placeholder:text-ink-400 transition-colors duration-200 focus:border-lime-500 focus:outline-none";

/**
 * V1 has no backend or database. On submit, this builds a pre-filled
 * `mailto:` link from the form fields and opens the user's email client —
 * a working, zero-infrastructure way to actually receive enquiries.
 *
 * To wire this to a real backend later (e.g. Formspree, EmailJS, or your
 * own API route), replace the body of `handleSubmit` below — the form UI,
 * validation and success state can all stay as they are.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) next.message = "Tell us a little about what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New enquiry from ${form.name} — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Business: ${form.business || "—"}\n` +
        `Email: ${form.email}\n` +
        `Phone/WhatsApp: ${form.phone || "—"}\n` +
        `Service needed: ${form.service}\n\n` +
        `Message:\n${form.message}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-line bg-mist p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-lime-500" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-semibold text-white">Almost there</h3>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-gray-400">
          Your email app should now be open with your message ready to send. If it didn't
          open, email us directly at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-lime-700 underline">
            {contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-lime-700 hover:text-lime-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
            Name <span className="text-lime-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            className={fieldClass}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-ink-700">
            Business
          </label>
          <input
            id="business"
            type="text"
            value={form.business}
            onChange={update("business")}
            className={fieldClass}
            placeholder="Your business name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
            Email <span className="text-lime-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
            placeholder="you@business.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass}
            placeholder="+91 98407 16615"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-700">
          Service Needed
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className={`${fieldClass} appearance-none bg-navy-800`}
        >
          {contactServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          Message <span className="text-lime-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your business and what you're looking for."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
