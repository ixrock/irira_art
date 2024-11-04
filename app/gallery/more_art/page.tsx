import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "More art",
}

export default async function MoreAreGallery() {
  const graphicsImages = await getFilesList("/img/more_art/graphics");
  const dragonImages = await getFilesList("/img/more_art/dragon");
  const ceramicsImages = await getFilesList("/img/more_art/ceramics");
  const scorpionImages = await getFilesList("/img/more_art/scorpion");

  return (
    <section>
      <h1>More art</h1>

      <h3>Graphics and watercolor art</h3>
      <Gallery files={graphicsImages}/>

      <h3>A Dragon</h3>
      <Gallery files={dragonImages}/>

      <h3>A scorpion from avocado seeds</h3>
      <Gallery files={scorpionImages}/>

      <h3>Ceramics</h3>
      <Gallery files={ceramicsImages}/>
    </section>
  )
};