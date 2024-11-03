import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Wearable Art",
}

export default async function DrawingArtGallery() {
  const files = await getFilesList("img/wearable_art");

  return (
    <section>
      <h1>Wearable Art</h1>
      <Gallery files={files} />
    </section>
  )
};