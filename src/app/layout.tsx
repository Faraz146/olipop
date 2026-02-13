import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://olipopsoda.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Olipop Soda - Premium Parallax Brand Experience",
  description:
    "Olipop is a modern functional soda brand inspired by classic flavors but made with better ingredients. Prebiotics, botanicals, and plant fiber in every can.",
  keywords: [
    "Olipop",
    "functional soda",
    "prebiotic soda",
    "healthy soda",
    "cherry soda",
    "grape soda",
    "lemon ginger soda",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Olipop Soda - Premium Parallax Brand Experience",
    description:
      "A modern functional soda brand inspired by classic flavors but made with better ingredients.",
    type: "website",
    url: SITE_URL,
  },
  verification: {
    google: "IRNGMWSOflcmQkDGa4_r-JGaAorcRxRSLzGi798SAFc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Olipop Soda",
      description:
        "A modern functional soda brand inspired by classic flavors but made with better ingredients.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Olipop",
      url: SITE_URL,
      description:
        "Olipop is a functional soda brand combining prebiotics, botanicals, and plant fiber with classic flavors.",
      sameAs: [
        "https://www.linkedin.com/in/faraz-sualeh/",
        "https://github.com/farazsualeh",
        "https://instagram.com/editsbyfaraz",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
