import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: {
    default: "Airr Cold Services – AC Repair, Installation & RO Water Purifier in Mumbai",
    template: "%s | Airr Cold Services",
  },
  description:
    "Expert AC repair, installation, maintenance, gas refilling, AMC plans, and RO water purifier services across Mumbai, Thane & Navi Mumbai. Call +91 76666 97586.",
  keywords: [
    "AC repair Mumbai",
    "AC installation Andheri",
    "AC service Mumbai",
    "RO water purifier repair Mumbai",
    "air conditioner maintenance Mumbai",
    "AC gas refilling Mumbai",
    "AMC plan AC Mumbai",
    "Airr Cold Services",
    "AC technician Andheri West",
  ],
  authors: [{ name: "Airr Cold Services" }],
  creator: "Airr Cold Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://airrcold.com",
    siteName: "Airr Cold Services",
    title: "Airr Cold Services – AC Repair & RO Water Purifier Mumbai",
    description:
      "Expert AC repair, installation, maintenance & RO water purifier services across Mumbai. 5,000+ happy customers. 10+ years experience.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Airr Cold Services – Cooling Experts You Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airr Cold Services – AC Repair & RO Water Purifier Mumbai",
    description:
      "Expert AC & RO water purifier services across Mumbai. Book online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "add-your-google-site-verification-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="canonical" href="https://airrcold.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#071B2D" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Airr Cold Services",
              description:
                "Expert AC repair, installation, maintenance and RO water purifier services across Mumbai and Maharashtra.",
              url: "https://airrcold.com",
              telephone: "+917666697586",
              email: "airrcoldservices@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A-22, Shah Industrial Area",
                addressLocality: "Andheri West",
                addressRegion: "Maharashtra",
                postalCode: "400053",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.1207",
                longitude: "72.8293",
              },
              openingHours: ["Mo-Sa 09:00-19:00"],
              priceRange: "₹₹",
              image: "https://airrcold.com/images/logo.png",
              sameAs: [],
              areaServed: [
                "Mumbai",
                "Thane",
                "Navi Mumbai",
                "Maharashtra",
              ],
              serviceType: [
                "AC Repair",
                "AC Installation",
                "AC Maintenance",
                "RO Water Purifier Service",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
