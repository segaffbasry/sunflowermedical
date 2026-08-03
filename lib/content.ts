/* Compact, client-safe content used by the interactive homepage UI.
   Long-form source copy lives in `source-content.ts` and stays server-side. */

export const company = {
  name: "Sunflower Medical",
  descriptor: "UK Manufacturer · Healthcare Furniture",
  phone: "+44 (0)1274 684004",
  email: "sales@sunflowermedical.co.uk",
  address: {
    line1: "17 Roydsdale Way",
    line2: "Euroway Trading Estate",
    city: "Bradford",
    postcode: "BD4 6SE",
  },
};

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Customisation", href: "/customisation" },
  { label: "About", href: "/about" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  lines: ["Healthcare furniture,", "made in Britain,", "made yours."],
  markerWord: 2, // index of the line carrying the yellow marker
  sub: "Examination couches, trolleys, screens and clinical storage — manufactured in Bradford and finished in your colours, your fabrics, your branding.",
  primary: { label: "Browse the range", href: "#catalogue" },
  secondary: { label: "Request a catalogue", href: "#resources" },
  scrollCue: "Scroll",
};

export const statement = {
  eyebrow: "Who we are",
  heading: "We build clinical furniture that lasts a decade and looks like it belongs to you.",
  body: [
    "Sunflower Medical designs and manufactures healthcare furniture at our own facility in Bradford. Examination and treatment couches, certified seating, medical trolleys, privacy screens, medicine cabinets and HTM compliant storage — built to order, not pulled from a container.",
    "Because we own the line, we can change it. Frame colours, upholstery, laminates, handles, dimensions and your own branding, applied at the point of manufacture rather than bolted on afterwards.",
  ],
  cta: { label: "More about the factory", href: "/about" },
};

/* Product names, summaries and sub-ranges follow the current source site. */

export type Product = {
  slug: string;
  name: string;
  short: string;
  image: string;
  count: string;
  types: string[];
  blurb: string;
  specs: { label: string; value: string }[];
  finishes: string[];
};

export const products: Product[] = [
  {
    slug: "couches",
    name: "Examination & Treatment Couches",
    short: "Couches & Chairs",
    image: "/products/couches.jpg",
    count: "4 ranges",
    types: ["Variable height", "Treatment chairs", "Fixed height", "Specialist"],
    blurb:
      "Functional, multi-purpose couches and chairs for patient examination, assessment and treatment, built around comfort, durability and ease of maintenance.",
    specs: [
      { label: "Applications", value: "Examination & treatment" },
      { label: "Formats", value: "Fixed, variable & specialist" },
      { label: "Manufacture", value: "Bradford, United Kingdom" },
      { label: "Options", value: "Colours, upholstery & branding" },
    ],
    finishes: ["#1b1b18", "#ffc937", "#5b7c99", "#8fa68e", "#c9c5bd"],
  },
  {
    slug: "seating",
    name: "Healthcare Certified Chairs & Stools",
    short: "Chairs & Stools",
    image: "/products/seating.png",
    count: "4 ranges",
    types: ["Individual", "Modular / bench", "Operator chairs", "Operator stools"],
    blurb:
      "Comfortable, durable and hygienic seating for patients, visitors and healthcare professionals, using supportive forms and easy-clean materials.",
    specs: [
      { label: "Users", value: "Patients, visitors & clinicians" },
      { label: "Formats", value: "Individual, modular & operator" },
      { label: "Environment", value: "Healthcare certified" },
      { label: "Options", value: "Colours, upholstery & branding" },
    ],
    finishes: ["#1b1b18", "#ffc937", "#5b7c99", "#a8543f", "#c9c5bd"],
  },
  {
    slug: "trolleys",
    name: "Medical Trolleys & Storage Solutions",
    short: "Trolleys & Storage",
    image: "/products/trolleys.png",
    count: "8 ranges",
    types: ["Vista", "Surgical", "Dressing", "Computer", "Drug", "Records"],
    blurb:
      "Adaptable British-made trolleys and storage for procedures, medicines, computers and records, designed to improve clinical organisation and workflow.",
    specs: [
      { label: "Applications", value: "Procedure, drug, IT & records" },
      { label: "System", value: "Modular storage options" },
      { label: "Manufacture", value: "Bradford, United Kingdom" },
      { label: "Options", value: "Accessories, finishes & branding" },
    ],
    finishes: ["#c9c5bd", "#1b1b18", "#ffc937", "#5b7c99", "#8fa68e"],
  },
  {
    slug: "bins",
    name: "Clinical Bins & Sack Holders",
    short: "Bins & Sack Holders",
    image: "/products/bins.png",
    count: "2 ranges",
    types: ["Clinical bins", "Sack holders"],
    blurb:
      "Hands-free, silent-closing clinical waste bins and sack holders with colour-coded lids, rust-resistant construction and easy-clean details.",
    specs: [
      { label: "Capacities", value: "20, 50 & 70 litres" },
      { label: "Operation", value: "Hands-free, silent close" },
      { label: "Waste streams", value: "Colour-coded lids" },
      { label: "Guidance", value: "HTM 07-01 & HTM 83" },
    ],
    finishes: ["#e2c94a", "#c25b5b", "#5b7c99", "#8fa68e", "#c9c5bd"],
  },
  {
    slug: "screens",
    name: "Mobile Patient Privacy Screens",
    short: "Privacy Screens",
    image: "/products/screens.png",
    count: "2 ranges",
    types: ["Easy-clean panels", "Disposable curtains"],
    blurb:
      "Mobile folding screens for temporary or permanent privacy, with durable easy-clean panel and disposable-curtain options for healthcare settings.",
    specs: [
      { label: "Purpose", value: "Temporary or permanent privacy" },
      { label: "Settings", value: "Hospitals, surgeries & clinics" },
      { label: "Panels", value: "Durable and easy to clean" },
      { label: "Options", value: "Colours, graphics & branding" },
    ],
    finishes: ["#8fa68e", "#5b7c99", "#c9c5bd", "#ffc937", "#1b1b18"],
  },
  {
    slug: "medicine",
    name: "Medicine Cabinets",
    short: "Medicine Cabinets",
    image: "/products/medicine.png",
    count: "4 ranges",
    types: ["Pharmacy", "Controlled drug", "CD inner", "Self administration"],
    blurb:
      "British-made, independently tested cabinets for secure pharmaceutical and controlled-drug storage in hospitals, clinics and care homes.",
    specs: [
      { label: "Purpose", value: "Secure pharmaceutical storage" },
      { label: "Access", value: "For authorised personnel" },
      { label: "Testing", value: "Independently tested" },
      { label: "Manufacture", value: "Bradford, United Kingdom" },
    ],
    finishes: ["#c9c5bd", "#1b1b18", "#5b7c99", "#ffc937", "#8fa68e"],
  },
  {
    slug: "ward",
    name: "Ward Furniture",
    short: "Ward Furniture",
    image: "/products/ward.jpg",
    count: "4 ranges",
    types: ["Bedside cabinets", "Overbed tables", "Wardrobes", "Chairs"],
    blurb:
      "Bedside cabinets, combination units, wardrobes and overbed tables designed for durability, patient access and straightforward cleaning.",
    specs: [
      { label: "Settings", value: "Wards, care homes & hospices" },
      { label: "Formats", value: "Cabinets, tables & wardrobes" },
      { label: "Design focus", value: "Access and cleanability" },
      { label: "Options", value: "Colours, laminates & layouts" },
    ],
    finishes: ["#c3a887", "#c9c5bd", "#8fa68e", "#5b7c99", "#1b1b18"],
  },
  {
    slug: "stainless",
    name: "Stainless Steel Healthcare Furniture",
    short: "Stainless Steel",
    image: "/products/stainless.png",
    count: "2 ranges",
    types: ["Surgical trolleys", "Mobile drip stands"],
    blurb:
      "Practical, manoeuvrable surgical trolleys and mobile drip stands with options from lightweight formats to heavy-duty weighted bases.",
    specs: [
      { label: "Ranges", value: "Trolleys & drip stands" },
      { label: "Use", value: "Everyday clinical support" },
      { label: "Options", value: "Lightweight to heavy duty" },
      { label: "Design focus", value: "Cleanable and manoeuvrable" },
    ],
    finishes: ["#c9c5bd", "#a8a89f", "#1b1b18"],
  },
  {
    slug: "htm",
    name: "HTM Compliant Cabinets & Worksurfaces",
    short: "HTM Compliant",
    image: "/products/htm.png",
    count: "2 ranges",
    types: ["Standard cabinets", "Custom cabinets"],
    blurb:
      "Standard and custom clinical cabinetry with practitioner drawers, pull-out and mobile units, designed around hygiene, safety and project requirements.",
    specs: [
      { label: "Ranges", value: "Standard & custom cabinets" },
      { label: "Formats", value: "Fixed, pull-out & mobile units" },
      { label: "Design focus", value: "Hygiene and safe storage" },
      { label: "Support", value: "In-house design & 3D CAD" },
    ],
    finishes: ["#c9c5bd", "#c3a887", "#8fa68e", "#5b7c99", "#ffc937"],
  },
];

/* ---------------- Customisation ---------------- */

export const customisation = {
  eyebrow: "What makes us different",
  heading: "Standard is where we start.",
  body: "Most suppliers sell you a catalogue number. We change the product to suit the room — and put your name on it. Specify a frame colour, an upholstery, a laminate, a set of dimensions and your own logo, and it is applied on the line, not in a workshop afterwards.",
  steps: [
    {
      n: "01",
      title: "Specify",
      text: "Tell us the room, the workflow and the constraints. We survey where it matters.",
    },
    {
      n: "02",
      title: "Finish",
      text: "Choose frame colour, upholstery, laminate and handle from the full range.",
    },
    {
      n: "03",
      title: "Brand",
      text: "Your logo and colourway applied at manufacture, on furniture and packaging.",
    },
    {
      n: "04",
      title: "Deliver",
      text: "Built in Bradford, delivered on our own vehicles, installed and signed off.",
    },
  ],
  swatches: [
    { name: "Sunflower", hex: "#ffc937" },
    { name: "Graphite", hex: "#1b1b18" },
    { name: "Clinical Blue", hex: "#5b7c99" },
    { name: "Sage", hex: "#8fa68e" },
    { name: "Oak", hex: "#c3a887" },
    { name: "Stone", hex: "#c9c5bd" },
    { name: "Clay", hex: "#a8543f" },
    { name: "Chalk", hex: "#eae7df" },
  ],
};

export const proof = {
  eyebrow: "Why specifiers choose us",
  stats: [
    { value: "9", label: "product categories", note: "couches to fitted rooms" },
    { value: "One site", label: "design to distribution", note: "Bradford, West Yorkshire" },
    { value: "40+", label: "countries supplied", note: "international distributor support" },
    { value: "Since 2002", label: "healthcare manufacturing", note: "designed and made in Britain" },
  ],
  marks: [
    "UK manufactured",
    "Made to order",
    "HTM compliant storage",
    "Own delivery fleet",
    "Distributor network",
    "Custom branding",
  ],
};

/* ---------------- About ---------------- */

export const about = {
  eyebrow: "The factory",
  heading: "Bradford, West Yorkshire.",
  body: [
    "Steel is cut, folded, welded and powder-coated on site. Upholstery is cut and sewn on site. Cabinets are edged and assembled on site. That is why a colour change is a conversation rather than a six-month tooling exercise.",
    "It also means we answer for the product. One manufacturer, one point of contact, from the first drawing to the installation sign-off.",
  ],
  points: [
    "Design and CAD in-house",
    "Steel fabrication and powder coating",
    "Upholstery cut and sew",
    "Cabinet assembly and edging",
    "Delivery on our own vehicles",
  ],
};

/* ---------------- Resources ---------------- */

export const resources = [
  {
    title: "Product catalogue",
    text: "The full range, with dimensions, finishes and order codes.",
    action: "View catalogue",
    href: "https://www.sunflowermedical.co.uk/brochure/250919_Sunflower%20Catalogue.pdf",
  },
  {
    title: "Interactive brochure",
    text: "Browse the current product range online, page by page.",
    action: "Open brochure",
    href: "https://online.fliphtml5.com/fgapo/oins/#p=1",
  },
  {
    title: "Distributor portal",
    text: "Trade pricing, stock and artwork for our partner network.",
    action: "Sign in",
    href: "https://sunflowermedical-my.sharepoint.com/:f:/g/personal/sclark_sunflowermedical_co_uk/Eny8Avfn7W9GswFwnCKkH2sBFvzuohPqhDuf4O4V-i87ZA?e=bLq6Ws",
  },
];

/* ---------------- Foot CTA ---------------- */

export const footCta = {
  heading: ["Looking for information", "about our products?"],
  body: "Send us the room, the budget and the deadline. We will come back with a specification and a price — not a brochure.",
  primary: { label: "Talk to the team", href: "/contact" },
  secondary: { label: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, "")}` },
};

/* ---------------- Shop popup ---------------- */

export const shop = {
  heading: "Shop",
  blocks: [
    {
      title: ["Buy", "direct"],
      text: "Order core lines online for delivery anywhere in the UK.",
      action: "Open the shop",
      kind: "shop" as const,
      href: "https://www.sunflowermedical.co.uk/shop/",
      external: true,
    },
    {
      title: ["Find", "a distributor"],
      text: "We supply through a partner network across the UK and Ireland.",
      action: "Find a distributor",
      kind: "link" as const,
      href: "/contact",
      external: false,
    },
    {
      title: ["Distributor", "portal"],
      text: "Trade pricing, stock levels and marketing artwork.",
      action: "Sign in",
      kind: "link" as const,
      href: "https://sunflowermedical-my.sharepoint.com/:f:/g/personal/sclark_sunflowermedical_co_uk/Eny8Avfn7W9GswFwnCKkH2sBFvzuohPqhDuf4O4V-i87ZA?e=bLq6Ws",
      external: true,
    },
  ],
};

/* ---------------- Search ---------------- */

export const searchSuggestions = [
  "Electric examination couch",
  "Bariatric ward chair",
  "Anaesthetic trolley",
  "HTM 71 tray storage",
  "Three-fold privacy screen",
  "Controlled drugs cabinet",
];

export const footerColumns = [
  {
    title: "Products",
    links: products.slice(0, 5).map((p) => ({
      label: p.short,
      href: `/products/${p.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Customisation", href: "/customisation" },
      { label: "Contact", href: "/contact" },
      { label: "Carbon reduction", href: "https://www.sunflowermedical.co.uk/wp-content/uploads/2025/02/CST004-Carbon-Reduction-Plan-2024-Rev.2.pdf" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Catalogue", href: "/catalogue" },
      { label: "Interactive brochure", href: "https://online.fliphtml5.com/fgapo/oins/#p=1" },
      { label: "Distributor portal", href: "https://sunflowermedical-my.sharepoint.com/:f:/g/personal/sclark_sunflowermedical_co_uk/Eny8Avfn7W9GswFwnCKkH2sBFvzuohPqhDuf4O4V-i87ZA?e=bLq6Ws" },
      { label: "Terms & conditions", href: "/terms" },
    ],
  },
];
