import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import TrustedProviders from "@/components/TrustedProviders";
import Catalogue from "@/components/Catalogue";
import Customisation from "@/components/Customisation";
import Factory from "@/components/Factory";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import FootCta from "@/components/FootCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <TrustedProviders />
      <Catalogue />
      <Customisation />
      <Factory />
      <Testimonials />
      <Resources />
      <FootCta />
    </main>
  );
}
