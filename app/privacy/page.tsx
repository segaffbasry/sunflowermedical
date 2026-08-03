import type { Metadata } from "next";
import LegalPage, {
  LegalInlineLink,
  type LegalSection,
} from "@/components/pages/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy & cookies",
  description:
    "How Sunflower Medical Limited collects, uses, stores and protects personal information, and how this website uses cookies and similar technology.",
  alternates: { canonical: "/privacy" },
};

const dataEmail = "data@sunflowermedical.co.uk";

const sections: readonly LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      <>
        Sunflower Medical Limited is the controller of personal information described in this
        notice. We are registered in England and Wales under company number 04514281. Our registered
        office is {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
        {company.address.postcode}.
      </>,
      <>
        For a privacy question or request, email{" "}
        <LegalInlineLink href={`mailto:${dataEmail}`}>{dataEmail}</LegalInlineLink>. You can also
        write to us at the address above.
      </>,
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "The information we hold depends on how you interact with us. You may give it to us when you make an enquiry, request a catalogue or quote, place an order, correspond with our team, apply for credit or work with us as a supplier or distributor.",
      "When you use this website, basic technical request information may also appear in hosting and security logs. This can include an IP address, browser or device type, requested pages, and the date and time of a request.",
    ],
    bullets: [
      "Name, job title, organisation and business contact details.",
      "Enquiry, quotation, order, delivery and customer-service correspondence.",
      "Transaction, invoice, payment and account information.",
      "Credit-reference, identity or anti-fraud information where a commercial check is necessary.",
      "Technical information needed to operate, secure and diagnose the website.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How and why we use it",
    paragraphs: [
      "We only use personal information when we have a lawful reason. The reason will usually be to take steps at your request, perform a contract, meet a legal obligation, pursue a legitimate business interest, or act on your consent.",
    ],
    bullets: [
      "Answer enquiries, prepare quotations and provide product or project guidance.",
      "Process orders, arrange delivery, take payment and provide after-sales support.",
      "Manage customer, distributor and supplier relationships and keep appropriate business records.",
      "Protect our website, systems, customers and business from misuse or fraud.",
      "Improve our products, services and communications.",
      "Send relevant marketing where the law allows it. You can opt out at any time, and we will request consent where consent is required.",
    ],
  },
  {
    id: "sharing-information",
    title: "Who we share it with",
    paragraphs: [
      "We may share only the information needed with companies that help us operate our business, such as delivery partners, payment and credit providers, IT and website suppliers, professional advisers, insurers and service providers. We may also disclose information where required by a court, regulator, law-enforcement body or other legal obligation.",
      "Service providers must use the information only for the agreed purpose and protect it appropriately. If a provider processes information outside the United Kingdom, we use a transfer mechanism or other safeguard required by data-protection law.",
      "We do not sell personal information.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "We keep personal information only for as long as it is needed for the purpose collected, including to meet contractual, tax, accounting, product-safety and other legal requirements and to resolve disputes.",
      "Contact information held only for marketing or expressions of interest is normally retained for up to four years, or until you ask us to stop. Where we provide a service or fulfil an order, we keep the relevant information while providing that service and for a further seven years. We then delete, anonymise or securely dispose of the information unless the law requires a different period.",
    ],
  },
  {
    id: "your-rights",
    title: "Your data rights",
    paragraphs: [
      <>
        Depending on the circumstances, you can ask for access to your information, correction,
        deletion, restriction, portability or object to its use. You can withdraw consent at any
        time where we rely on consent. To make a request, email{" "}
        <LegalInlineLink href={`mailto:${dataEmail}`}>{dataEmail}</LegalInlineLink>. We may need to
        verify your identity before responding.
      </>,
      <>
        If you are unhappy with our response, you can complain to the{" "}
        <LegalInlineLink
          href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
          external
        >
          Information Commissioner&apos;s Office
        </LegalInlineLink>
        , the UK data-protection regulator.
      </>,
    ],
    bullets: [
      "Be informed about how your information is used.",
      "Request a copy of the personal information we hold about you.",
      "Ask us to correct incomplete or inaccurate information.",
      "Ask us to erase or restrict information where the legal conditions apply.",
      "Object to direct marketing and, in some cases, other processing based on legitimate interests.",
      "Request data portability where the legal conditions apply.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technology",
    paragraphs: [
      "This version of the Sunflower Medical website does not intentionally set analytics, advertising or social-media cookies. We may use technology that is strictly necessary to deliver, secure and maintain the website. Strictly necessary technology does not require consent.",
      "If we introduce analytics, advertising or other non-essential cookies, we will explain their purpose and ask for your choice before they are set. Links to third-party websites or documents may take you to services that use their own cookies; their privacy and cookie notices will apply once you leave this site.",
      "You can also use your browser settings to inspect, block or delete cookies. Blocking essential technology may prevent parts of a website from working correctly.",
    ],
  },
  {
    id: "updates-and-contact",
    title: "Updates and contact",
    paragraphs: [
      "We may update this notice when our services, website or legal obligations change. The latest version will always be published on this page with its update date.",
      <>
        Privacy questions and rights requests: {" "}
        <LegalInlineLink href={`mailto:${dataEmail}`}>{dataEmail}</LegalInlineLink>
        <br />
        General enquiries: {" "}
        <LegalInlineLink href={`mailto:${company.email}`}>{company.email}</LegalInlineLink>
        <br />
        Telephone: {" "}
        <LegalInlineLink href="tel:+441274684004">{company.phone}</LegalInlineLink>
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy & cookies"
      intro="How Sunflower Medical collects, uses and protects personal information — and what this website stores on your device."
      updated="4 August 2026"
      dateLabel="Page published"
      sections={sections}
      contactLabel={dataEmail}
      contactHref={`mailto:${dataEmail}`}
    />
  );
}
