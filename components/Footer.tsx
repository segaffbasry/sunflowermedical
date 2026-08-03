import Link from "next/link";
import Logo from "./Logo";
import { company, footerColumns } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(27,27,24,0.1)] pb-10 pt-16">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo className="w-52 sm:w-56" />
            <p className="mt-5 max-w-xs text-[0.875rem] leading-relaxed text-[#61615b]">
              UK manufacturer of healthcare furniture, specialising in customisation and customer
              branding.
            </p>
            <address className="mt-6 space-y-0.5 text-[0.875rem] not-italic text-[#61615b]">
              <div>{company.address.line1}</div>
              <div>{company.address.line2}</div>
              <div>
                {company.address.city} {company.address.postcode}
              </div>
            </address>
            <div className="mt-5 space-y-1 text-[0.875rem]">
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="block text-[#1b1b18] transition-colors hover:text-[#e8ae14]"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-[#1b1b18] transition-colors hover:text-[#e8ae14]"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="-mx-2 block rounded-lg px-2 py-1.5 text-[0.875rem] text-[#4a4a44] transition-colors duration-200 hover:bg-[rgba(27,27,24,0.045)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="-mx-2 block rounded-lg px-2 py-1.5 text-[0.875rem] text-[#4a4a44] transition-colors duration-200 hover:bg-[rgba(27,27,24,0.045)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[rgba(27,27,24,0.09)] pt-6 text-[0.8125rem] text-[#73736d] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {company.name}. Manufactured in Bradford, United Kingdom.
          </span>
          <div className="flex gap-6">
            <a
              href="https://www.sunflowermedical.co.uk/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="rounded py-1 transition-colors hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
            >
              Privacy & cookies
            </a>
            <a
              href="https://www.sunflowermedical.co.uk/wp-content/uploads/2025/03/TCs-01.04.25-1.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded py-1 transition-colors hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
            >
              Terms
            </a>
            <a
              href="#top"
              className="rounded py-1 transition-colors hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
