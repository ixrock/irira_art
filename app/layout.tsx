import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

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
      <Header/>
      <div className="page-content">
        {children}
      </div>
      <Footer/>
    </main>
    </body>
    </html>
  );
}
