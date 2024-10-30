import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google"
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

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
    <body>
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
    </body>
    <GoogleAnalytics gaId="UA-100107354-1"/>
    </html>
  );
}
