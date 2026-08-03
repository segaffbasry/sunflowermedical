import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { UIProvider } from "@/components/UIProvider";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchOverlay from "@/components/SearchOverlay";
import ShopPopup from "@/components/ShopPopup";
import QuickView from "@/components/QuickView";

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunflowermedical.co.uk"),
  title: {
    default: "Sunflower Medical — Healthcare furniture, made in Britain",
    template: "%s | Sunflower Medical",
  },
  description:
    "UK manufacturer of examination couches, medical trolleys, privacy screens, medicine cabinets and HTM compliant clinical storage. Built to order in Bradford and finished in your branding.",
  openGraph: {
    title: "Sunflower Medical — Healthcare furniture, made in Britain",
    description:
      "Healthcare furniture designed and manufactured in Bradford, with custom colours, finishes and branding.",
    type: "website",
    locale: "en_GB",
    siteName: "Sunflower Medical",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <MotionProvider>
          <UIProvider>
            <SmoothScroll />
            <Header />
            {children}
            <Footer />
            <SearchOverlay />
            <ShopPopup />
            <QuickView />
          </UIProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
