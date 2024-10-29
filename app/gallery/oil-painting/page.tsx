import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Oil Painting",
}

export default async function OilPaintingGallery() {
  const files = await getFilesList("img/oil_painting");

  return (
    <section>
      <h1>Oil Painting</h1>
      <Gallery files={files}/>
    </section>
  )
};