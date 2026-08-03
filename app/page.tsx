import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Catalogue from "@/components/Catalogue";
import Customisation from "@/components/Customisation";
import Factory from "@/components/Factory";
import Resources from "@/components/Resources";
import FootCta from "@/components/FootCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <Catalogue />
      <Customisation />
      <Factory />
      <Resources />
      <FootCta />
    </main>
  );
}
