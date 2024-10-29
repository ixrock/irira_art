import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Eco seed art",
}

export default async function EcoArtGallery() {
  const files = await getFilesList("img/eco_art");

  return (
    <section>
      <h1>Eco seed art</h1>
      <Gallery files={files}/>
    </section>
  )
};