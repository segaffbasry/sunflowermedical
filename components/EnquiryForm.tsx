"use client";

import { useId, type FormEvent } from "react";

type EnquiryFormProps = {
  recipient?: string;
  title?: string;
};

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl bg-[#fdfdf7] px-4 py-3 text-[0.9375rem] text-[#1b1b18] " +
  "ring-1 ring-inset ring-[rgba(27,27,24,0.14)] transition-[background-color,box-shadow] duration-200 " +
  "placeholder:text-[#73736d] hover:ring-[rgba(27,27,24,0.24)] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-[#2463eb]";

const labelClass = "text-[0.8125rem] font-semibold text-[#4a4a44]";

export default function EnquiryForm({
  recipient = "sales@sunflowermedical.co.uk",
  title = "Tell us what you need",
}: EnquiryFormProps) {
  const formId = useId();
  const noteId = `${formId}-email-note`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const firstName = value("firstName");
    const lastName = value("lastName");
    const company = value("company");
    const subject = `${title}: ${company || `${firstName} ${lastName}`.trim()}`;
    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Position: ${value("position") || "Not provided"}`,
      `Marketing updates: ${data.get("marketing") ? "Yes" : "No"}`,
      "",
      "Additional requirements:",
      value("message"),
    ].join("\n");

    window.location.assign(
      `mailto:${recipient.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="rounded-[24px] bg-[#f5f5f0] p-5 ring-1 ring-inset ring-[rgba(27,27,24,0.08)] sm:rounded-[28px] sm:p-8 lg:p-10"
    >
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Enquiry</p>
        <h2 id={`${formId}-title`} className="display text-[clamp(1.65rem,3vw,2.5rem)]">
          {title}
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#61615b]">
          Share a few details and we&apos;ll prepare an email for our team. Required fields are
          marked with an asterisk.
        </p>
      </div>

      <form className="mt-8" aria-describedby={noteId} onSubmit={handleSubmit}>
        <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
          <label className={labelClass} htmlFor={`${formId}-first-name`}>
            First name <span aria-hidden="true">*</span>
            <input
              id={`${formId}-first-name`}
              className={fieldClass}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
          </label>

          <label className={labelClass} htmlFor={`${formId}-last-name`}>
            Last name <span aria-hidden="true">*</span>
            <input
              id={`${formId}-last-name`}
              className={fieldClass}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </label>

          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email address <span aria-hidden="true">*</span>
            <input
              id={`${formId}-email`}
              className={fieldClass}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
            />
          </label>

          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone number
            <input
              id={`${formId}-phone`}
              className={fieldClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>

          <label className={labelClass} htmlFor={`${formId}-company`}>
            Company
            <input
              id={`${formId}-company`}
              className={fieldClass}
              name="company"
              type="text"
              autoComplete="organization"
            />
          </label>

          <label className={labelClass} htmlFor={`${formId}-position`}>
            Position
            <input
              id={`${formId}-position`}
              className={fieldClass}
              name="position"
              type="text"
              autoComplete="organization-title"
            />
          </label>

          <label className={`${labelClass} sm:col-span-2`} htmlFor={`${formId}-message`}>
            Additional requirements <span aria-hidden="true">*</span>
            <textarea
              id={`${formId}-message`}
              className={`${fieldClass} min-h-36 resize-y`}
              name="message"
              rows={5}
              placeholder="Tell us about the product, quantity, finish, branding or delivery schedule you need."
              required
            />
          </label>
        </div>

        <label
          className="mt-5 flex items-start gap-3 rounded-xl p-3 text-[0.8125rem] leading-relaxed text-[#4a4a44] transition-colors hover:bg-[rgba(27,27,24,0.035)]"
          htmlFor={`${formId}-marketing`}
        >
          <input
            id={`${formId}-marketing`}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#2463eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2463eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f0]"
            name="marketing"
            type="checkbox"
          />
          <span>
            I&apos;d like to receive occasional product news and updates from Sunflower Medical.
          </span>
        </label>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="cta-button group relative inline-flex h-[3.25rem] items-center justify-center gap-2.5 self-start rounded-full bg-[#2463eb] px-7 text-[0.9375rem] font-semibold tracking-[-0.015em] text-white shadow-[0_6px_14px_-4px_rgba(36,99,235,0.52)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1d54cf] hover:shadow-[0_12px_24px_-8px_rgba(36,99,235,0.62)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f0]"
          >
            <span>Prepare enquiry</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.6 7h8.8M7.7 3.3 11.4 7l-3.7 3.7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </svg>
          </button>

          <p id={noteId} className="max-w-sm text-[0.75rem] leading-relaxed text-[#61615b]">
            This opens your email app with the enquiry filled in. Nothing is sent until you
            review and send the email.
          </p>
        </div>
      </form>
    </section>
  );
}
