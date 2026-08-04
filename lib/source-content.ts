import "server-only";

export const sourceLinks = {
  catalogue:
    "https://www.sunflowermedical.co.uk/brochure/250919_Sunflower%20Catalogue.pdf",
  brochure: "https://online.fliphtml5.com/fgapo/oins/#p=1",
  distributor:
    "https://sunflowermedical-my.sharepoint.com/:f:/g/personal/sclark_sunflowermedical_co_uk/Eny8Avfn7W9GswFwnCKkH2sBFvzuohPqhDuf4O4V-i87ZA?e=bLq6Ws",
  terms:
    "https://www.sunflowermedical.co.uk/wp-content/uploads/2025/03/TCs-01.04.25-1.pdf",
  privacy: "https://www.sunflowermedical.co.uk/privacy-policy/",
  modernSlavery:
    "https://www.sunflowermedical.co.uk/wp-content/uploads/2024/09/CPY006-Modern-Slavery-Statement-Rev.1-1.pdf",
  carbonReduction:
    "https://www.sunflowermedical.co.uk/wp-content/uploads/2025/02/CST004-Carbon-Reduction-Plan-2024-Rev.2.pdf",
} as const;

export const aboutPage = {
  intro:
    "UK based healthcare furniture manufacturer with a specialty in customisation and customer branding.",
  paragraphs: [
    "Based in Bradford, West Yorkshire, we are proud of our UK manufacturing facility, where design, manufacturing, assembly and distribution all take place at one central site. That joined-up approach lets us create new products, manufacture them from start to finish and provide bespoke solutions with outstanding service.",
    "Our CNC machining, drilling, spraying, pressing and upholstering capabilities let us manufacture accurately and respond quickly to customer requirements, whether the order is for one item or a larger quantity in a specific colour or finish.",
    "Our specialised product designers use modern 3D CAD technology to take ideas from concept to reality. They can develop a new product or adapt an existing one around the exact needs of a healthcare setting.",
  ],
  capabilities: [
    "Design and 3D CAD in-house",
    "CNC machining and drilling",
    "Metal pressing and fabrication",
    "Powder coating and spraying",
    "Upholstery and final assembly",
    "Distribution from one UK site",
  ],
  products:
    "Through innovative design, continuous development and modern materials, we create a functional, user-friendly range that is cleanable, durable and visually considered. Cleanliness is part of the design process from the start, helping to minimise dirt and bacteria traps, and each product is supplied with cleaning guidance.",
  values:
    "Our aim is to provide examination, treatment and contemporary storage solutions whose products and service exceed expectations.",
  highlights: [
    { value: "Bradford", label: "design and manufacturing" },
    { value: "One site", label: "concept through distribution" },
    { value: "3D CAD", label: "bespoke product development" },
    { value: "UK made", label: "controlled quality and lead times" },
  ],
} as const;

export const customisationPage = {
  intro:
    "Tailored healthcare products that reflect your identity without compromising hygiene, durability or compliance.",
  paragraphs: [
    "Healthcare environments often require tailored solutions. Our dedicated customisation and branding service covers mobile privacy screens, clinical waste bins and other essential equipment, designed around both operational needs and visual identity.",
    "Whether you need colours that match departmental schemes, branded finishes that strengthen your organisation's presence, or a bespoke design for a unique application, our team can help.",
  ],
  manufacture: [
    "Proudly based in Bradford, West Yorkshire, Sunflower Medical carries out design, manufacturing, assembly and distribution from one UK site. This fully integrated approach gives us close control over quality and lead times, from a single customised item to a larger roll-out.",
    "With in-house CNC machining, drilling, spraying and pressing facilities, we produce consistently while retaining flexibility over colours, finishes and delivery schedules.",
  ],
  offers: [
    {
      title: "Custom colours & finishes",
      text: "Match products to departmental colour schemes, wayfinding or infection-prevention standards with a consistent, considered finish.",
    },
    {
      title: "Professional branding",
      text: "Add logos, graphics or signage to screens, bins and other units to carry your organisation's identity through clinical settings.",
    },
    {
      title: "Bespoke design capability",
      text: "Our in-house design team and 3D CAD workflow can adapt an existing product or develop a new solution around your requirements.",
    },
    {
      title: "Built for healthcare",
      text: "Every customised product is developed with the same focus on cleanability, safety, durability and day-to-day clinical use.",
    },
  ],
} as const;

export const contactPage = {
  intro:
    "We provide high-quality medical furniture and equipment to customers across the UK and internationally. Whether you are a healthcare provider, business or distributor, our team is here to help.",
  departments: [
    {
      title: "Sales & general enquiries",
      email: "sales@sunflowermedical.co.uk",
      phone: "+44 (0)1274 684004",
    },
    {
      title: "Customer services",
      email: "customerservices@sunflowermedical.co.uk",
      phone: "+44 (0)1274 684004",
    },
    {
      title: "International & export",
      email: "export@sunflowermedical.co.uk",
      phone: "+44 (0)1274 684004",
    },
  ],
  uk: {
    title: "UK mainland",
    intro:
      "For hospitals, clinics and care homes across the UK, we combine direct product guidance with practical delivery and after-sales support.",
    points: [
      "Direct sales and product guidance",
      "Fast, reliable UK delivery",
      "Custom product solutions",
      "Bulk ordering and trade partnerships",
      "Responsive after-sales support",
    ],
  },
  international: {
    title: "International customers",
    intro:
      "We supply worldwide and support distribution partners with the practical detail needed to bring products into new markets.",
    points: [
      "Market and product-range guidance",
      "Regulatory and documentation support",
      "Reliable shipping and logistics",
      "Secure commercial arrangements",
      "Long-term distributor partnerships",
    ],
  },
  hours: "Monday to Friday, 8:30am–4:30pm",
} as const;

export type ProductSource = {
  title: string;
  sourceUrl: string;
  paragraphs: readonly string[];
  subranges: readonly { name: string; sourceUrl: string }[];
};

export const productSource: Record<string, ProductSource> = {
  couches: {
    title: "Examination and treatment couches & chairs",
    sourceUrl: "https://www.sunflowermedical.co.uk/examination-and-treatment-couch-chairs/",
    paragraphs: [
      "Our range of examination and treatment couches and chairs provides functional, multi-purpose solutions for the examination, assessment and treatment of patients across a wide range of healthcare applications.",
      "High-quality materials support durability, patient comfort and straightforward maintenance, helping clinical teams work efficiently in busy care environments.",
    ],
    subranges: [
      { name: "Variable Height Couches", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/examination-and-treatment-couch-chairs/variable-height-couches/" },
      { name: "Treatment Chairs", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/examination-and-treatment-couch-chairs/treatment-chairs/" },
      { name: "Fixed Height Couches", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/examination-and-treatment-couch-chairs/fixed-height-couches/" },
      { name: "Specialist Treatment Couches", sourceUrl: "https://www.sunflowermedical.co.uk/product/specialist-treatment-couches/" },
    ],
  },
  seating: {
    title: "Healthcare certified chairs & stools",
    sourceUrl: "https://www.sunflowermedical.co.uk/healthcare-certified-chairs-stools/",
    paragraphs: [
      "Healthcare certified chairs and stools are designed around comfort, durability and hygiene for patients, visitors and healthcare professionals.",
      "The range spans comfortable visitor seating and upholstered chairs through to ergonomic consultation chairs and operator stools, using easy-clean materials selected for demanding healthcare environments.",
    ],
    subranges: [
      { name: "Individual Seating", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/healthcare-certified-chairs-stools/individual-seating/" },
      { name: "Modular / Bench Seating", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/healthcare-certified-chairs-stools/multi-bench-seating/" },
      { name: "Consultant / Operator Chairs", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/healthcare-certified-chairs-stools/operator-chairs/" },
      { name: "Operator Stools", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/healthcare-certified-chairs-stools/operator-stools/" },
    ],
  },
  trolleys: {
    title: "Medical trolleys & storage solutions",
    sourceUrl: "https://www.sunflowermedical.co.uk/medical-trolleys-storage-solution/",
    paragraphs: [
      "Our medical trolleys and storage solutions are designed to improve organisation and workflow in healthcare environments, from everyday procedure support to secure medication and record storage.",
      "British-made construction, adaptable formats and practical accessories help clinical teams configure a trolley or storage system around the task, the room and the people using it.",
    ],
    subranges: [
      { name: "Vista Trolleys & Storage Modules", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/vista-trolley-storage-module-range/" },
      { name: "Surgical Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/surgical-trolleys/" },
      { name: "Dressing Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/dressing-trolleys/" },
      { name: "Computer Trolleys and Workstations", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/computer-trolleys-and-workstations/" },
      { name: "Ward Drug & Medicine Dispensing Trolley", sourceUrl: "https://www.sunflowermedical.co.uk/product/ward-drug-medicine-dispensing-trolley/" },
      { name: "Dosage System Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/drugs-trolleys/" },
      { name: "Medical Notes Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product/medical-notes-trolleys/" },
      { name: "Records Transfer Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product/records-transfer-trolley/" },
    ],
  },
  bins: {
    title: "Clinical bins & sack holders",
    sourceUrl: "https://www.sunflowermedical.co.uk/clinical-bins/",
    paragraphs: [
      "Our hands-free, flame-retardant bin range is designed for multi-function healthcare waste disposal and is compliant with HTM 07-01. Usage is identified by coloured lids and pedal labels, with 20, 50 and 70 litre sizes across the required waste streams.",
      "The bins are silent-closing as standard, use rust-resistant construction and are designed for straightforward cleaning in hospitals, surgeries, care homes and other healthcare environments.",
    ],
    subranges: [
      { name: "Clinical Bins", sourceUrl: "https://www.sunflowermedical.co.uk/product/20-litre-hospital-clinical-bins-sun-bin20/" },
      { name: "Sack Holders", sourceUrl: "https://www.sunflowermedical.co.uk/product/sack-holders/" },
    ],
  },
  screens: {
    title: "Mobile patient privacy screens",
    sourceUrl: "https://www.sunflowermedical.co.uk/mobile-patient-privacy-screens/",
    paragraphs: [
      "Mobile folding screens provide temporary or permanent patient privacy in hospitals, doctors' surgeries and healthcare centres.",
      "The durable, easy-clean panel system is designed with hygiene in mind and helps reduce cross-infection risk while remaining simple to move and configure.",
    ],
    subranges: [
      { name: "Mobile Patient Privacy Screen", sourceUrl: "https://www.sunflowermedical.co.uk/product/three-panel-mobile-folding-hospital-ward-screen-sun-mfs3/" },
      { name: "Disposable Curtain Screens", sourceUrl: "https://www.sunflowermedical.co.uk/product/replacement-disposable-curtain/" },
    ],
  },
  medicine: {
    title: "Medicine cabinets",
    sourceUrl: "https://www.sunflowermedical.co.uk/medicine-cabinets/",
    paragraphs: [
      "Our medicine cabinets support safe, secure pharmaceutical storage in healthcare settings, including options for controlled drugs and self-administration.",
      "Robust construction and secure locking mechanisms restrict access to authorised personnel. The British-made range is independently tested, durable and designed for straightforward maintenance in hospitals, clinics and care homes.",
    ],
    subranges: [
      { name: "Medicine / Pharmacy Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/product/medicine-cabinets/" },
      { name: "Controlled Drug Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/product/controlled-drug-cabinets/" },
      { name: "Medicine Cabinets with Controlled Drug Inner", sourceUrl: "https://www.sunflowermedical.co.uk/product/medicine-outer-cabinet-controlled-drug-inner/" },
      { name: "Self Administration (MDS) Wall Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/product/self-administration-wall-cabinet/" },
    ],
  },
  ward: {
    title: "Ward furniture",
    sourceUrl: "https://www.sunflowermedical.co.uk/ward-furniture/",
    paragraphs: [
      "Mobile bedside cabinets, wardrobes and overbed tables support hospital wards, care homes, individual bedrooms, nursing homes and hospices, with durable formats developed for demanding care environments.",
      "Configurations are designed around patient access and day-to-day cleanability, with practical storage choices and high-quality components that support long service life.",
    ],
    subranges: [
      { name: "Bedside Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/product/axis-bedside-cabinets/" },
      { name: "Bedside Cabinet Combination Units", sourceUrl: "https://www.sunflowermedical.co.uk/product/bedside-cabinet-combination-unit/" },
      { name: "Wardrobes", sourceUrl: "https://www.sunflowermedical.co.uk/product/wardrobes/" },
      { name: "Overbed Tables", sourceUrl: "https://www.sunflowermedical.co.uk/product/overbed-overchair-table/" },
    ],
  },
  stainless: {
    title: "Stainless steel healthcare furniture",
    sourceUrl: "https://www.sunflowermedical.co.uk/stainless-steel-healthcare-furniture/",
    paragraphs: [
      "Simple, practical and easy to manoeuvre, the stainless steel range supports everyday clinical work with durable, cleanable construction.",
      "Options extend from lightweight formats to heavy-duty weighted bases, with material and specification choices to suit different hygiene requirements and budgets.",
    ],
    subranges: [
      { name: "Surgical Trolleys", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/medical-trolleys-storage-solution/surgical-trolleys/" },
      { name: "Mobile Drip Stands", sourceUrl: "https://www.sunflowermedical.co.uk/product/mobile-chromed-steel-drip-stand/" },
    ],
  },
  htm: {
    title: "HTM compliant cabinets & worksurfaces",
    sourceUrl: "https://www.sunflowermedical.co.uk/htm-compliant-cabinets-worksurfaces/",
    paragraphs: [
      "HTM compliant cabinets and worksurfaces are developed around the hygiene, safety and storage needs of clinical environments.",
      "The range includes standard cabinets, practitioner drawers, pull-out and mobile units, plus adaptable project cabinetry for larger schemes. High-quality materials and cleanable details support durability and straightforward maintenance.",
    ],
    subranges: [
      { name: "Standard Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/product-category/htm-compliant-cabinets-worksurfaces/cabinet-range/" },
      { name: "Custom Cabinets", sourceUrl: "https://www.sunflowermedical.co.uk/custom-cabinets/" },
    ],
  },
};
