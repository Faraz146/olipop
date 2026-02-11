import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Olipop — A New Kind of Soda",
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
  openGraph: {
    title: "Olipop — A New Kind of Soda",
    description:
      "A modern functional soda brand inspired by classic flavors but made with better ingredients.",
    type: "website",
  },
  verification: {
    google: "IRNGMWSOflcmQkDGa4_r-JGaAorcRxRSLzGi798SAFc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
