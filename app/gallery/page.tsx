import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import { GalleryPreview } from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "My Art",
}

export default async function GalleryPage() {
  const [oil, digital, ecoArt, ecoJewel, moreArt] = await Promise.all([
    getFilesList("img/oil_painting"),
    getFilesList("img/digital_art"),
    getFilesList("img/eco_art"),
    getFilesList("img/eco_jewellery/main"),
    getFilesList("img/more_art/graphics"),
  ]);

  return (
    <div>
      <GalleryPreview header="Oil painting" detailsUrl="/gallery/oil-painting" files={oil}/>
      <GalleryPreview header="Digital Art" detailsUrl="/gallery/digital-art" files={digital}/>
      <GalleryPreview header="Eco Art" detailsUrl="/gallery/eco-art" files={ecoArt}/>
      <GalleryPreview header="Eco Jewellery" detailsUrl="/gallery/eco-jewellery" files={ecoJewel}/>
      <GalleryPreview header="More art" detailsUrl="/gallery/more-art" files={moreArt}/>
    </div>
  )
};
