import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Study Painting",
}

export default async function DrawingArtGallery() {
  const files = await getFilesList("img/study_painting");

  return (
    <section>
      <h1>Study Painting</h1>
      <Gallery files={files} />
    </section>
  )
};