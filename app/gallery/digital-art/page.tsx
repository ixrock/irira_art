import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Digital Art",
}

export default async function DigitalArtGallery() {
  const files = await getFilesList("img/digital_art");

  return (
    <section>
      <h1>Digital Art</h1>
      <Gallery files={files} />
    </section>
  )
};