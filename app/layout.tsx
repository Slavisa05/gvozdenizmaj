import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const algerianFont = localFont({
  src: '../public/fonts/Algerian.ttf', 
  variable: '--font-algerian',
  display: 'swap',
})

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taktičko strelište u Srbiji | Gvozdeni zmaj",
  description: "Taktičko strelište u Srbiji Gvozdeni zmaj nudi profesionalne treninge rukovanja oružjem, moderne staze, širok izbor oružja i stručne instruktore. Rezervišite svoj termin još danas!",

  openGraph: {
    title: "Taktičko strelište u Srbiji | Gvozdeni zmaj",
    description: "Taktičko strelište u Srbiji Gvozdeni zmaj nudi profesionalne treninge rukovanja oružjem, moderne staze, širok izbor oružja i stručne instruktore.",
    url: "https://gvozdenizmaj.com",
    siteName: "gvozdenizmaj.com",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://gvozdenizmaj.com/srb.jpg",
        width: 1200,
        height: 630,
        alt: "Taktičko strelište u Srbiji | Gvozdeni zmaj",
      },
    ],
  },

  // Twitter/X kartice
  twitter: {
    card: "summary_large_image",
    title: "Taktičko strelište u Srbiji | Gvozdeni zmaj",
    description: "Rezervišite svoj termin još danas!",
    images: ["https://gvozdenizmaj.com/srb.jpg"],
  },

  // Canonical URL (sprijecava duplicate content)
  alternates: {
    canonical: "https://gvozdenizmaj.com",
  },

  // Ikonica u tabu browsera
  icons: {
    icon: "/favicon.ico",
  },

  // Dozvoljava Googleu da indeksira
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${algerianFont.variable} ${cairo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
