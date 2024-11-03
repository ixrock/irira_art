import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Drawing",
}

export default async function DrawingArtGallery() {
  const files = await getFilesList("img/drawing");

  return (
    <section>
      <h1>Drawing</h1>
      <Gallery files={files} />
    </section>
  )
};