import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Menu from "@/app/components/menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Iri Ra',
    default: 'Iri Ra',
  },
  description: "I’m Iri Ra - a young artist from Russia and Finland.",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <main>
      <header>
        <div className="logo"/>
        <Menu/>
      </header>
      <div className="page-content">
        {children}
      </div>
      <footer className="social-icons">
        <a href="https://vk.com/uniqueartcreations" target="_blank">
          <Image src="/vk.svg" width={32} height={32} alt="Vk.com"/>
        </a>
        <a href="https://www.facebook.com/Mudra-Unique-Art-Creations-By-Iri-262591347114916/" target="_blank">
          <Image src="/facebook.svg" width={32} height={32} alt="Facebook"/>
        </a>
        <a href="https://www.instagram.com/iri_ra/" target="_blank">
          <Image src="/instagram.svg" width={32} height={32} alt="Instagram"/>
        </a>
      </footer>
    </main>
    </body>
    </html>
  );
}
