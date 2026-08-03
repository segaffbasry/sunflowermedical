import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/customisation-branding", destination: "/customisation", permanent: true },
      { source: "/examination-and-treatment-couch-chairs", destination: "/products/couches", permanent: true },
      { source: "/healthcare-certified-chairs-stools", destination: "/products/seating", permanent: true },
      { source: "/medical-trolleys-storage-solution", destination: "/products/trolleys", permanent: true },
      { source: "/clinical-bins", destination: "/products/bins", permanent: true },
      { source: "/mobile-patient-privacy-screens", destination: "/products/screens", permanent: true },
      { source: "/medicine-cabinets", destination: "/products/medicine", permanent: true },
      { source: "/ward-furniture", destination: "/products/ward", permanent: true },
      { source: "/stainless-steel-healthcare-furniture", destination: "/products/stainless", permanent: true },
      { source: "/htm-compliant-cabinets-worksurfaces", destination: "/products/htm", permanent: true },
    ];
  },
};

export default nextConfig;
