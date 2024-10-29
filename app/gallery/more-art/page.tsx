import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "More art",
}

export default async function MoreAreGallery() {
  const graphicsImages = await getFilesList("img/more_art/graphics");
  const dragonImages = await getFilesList("img/more_art/dragon");
  const ceramicsImages = await getFilesList("img/more_art/ceramics");
  const scorpionImages = await getFilesList("img/more_art/scorpion");

  return (
    <section>
      <h1>More art</h1>

      <h2>Graphics and watercolor art</h2>
      <Gallery files={graphicsImages}/>

      <h2>A Dragon</h2>
      <Gallery files={dragonImages}/>

      <h2>A scorpion from avocado seeds</h2>
      <Gallery files={scorpionImages}/>

      <h2>Ceramics</h2>
      <Gallery files={ceramicsImages}/>
    </section>
  )
};