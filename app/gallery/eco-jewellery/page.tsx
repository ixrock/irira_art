import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "Eco jewellery",
}

export default async function EcoJewelleryGallery() {
  const mainFiles = await getFilesList("img/eco_jewellery/main");
  const forestFiles = await getFilesList("img/eco_jewellery/forest");

  return (
    <section>
      <h1>Eco jewellery from avocado seeds</h1>
      <p>
        Every ornament of an avocado pendant is unique, designed and carved by me with love.
        All stones used here are natural gemstones.
      </p>
      <Gallery files={mainFiles}/>

      <br/>
      <h1>Photos from the forest</h1>
      <br/>
      <Gallery files={forestFiles}/>
    </section>
  )
};