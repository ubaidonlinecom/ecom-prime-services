import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_NAME } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE_NAME} | Premium VPS & Business Solutions`,
  description: "High-performance VPS hosting, company formation, and global business support services for growing brands.",
  keywords: ["VPS Hosting", "Company Formation", "Texas LLC", "Business Support", "E-commerce Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
