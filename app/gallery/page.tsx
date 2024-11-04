import React from "react";
import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import { GalleryPreview } from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "My Art",
}

export default async function GalleryPage() {
  const [oil, digital, ecoArt, ecoJewel, moreArt, drawing, studyPainting, wearableArt] = await Promise.all([
    getFilesList("/img/oil_painting"),
    getFilesList("/img/digital_art"),
    getFilesList("/img/eco_art"),
    getFilesList("/img/eco_jewellery/main"),
    getFilesList("/img/more_art/graphics"),
    getFilesList("/img/drawing"),
    getFilesList("/img/study_painting"),
    getFilesList("/img/wearable_art"),
  ]);

  return (
    <div>
      <GalleryPreview header="Oil painting" detailsUrl="/gallery/oil_painting" files={oil}/>
      <GalleryPreview header="Digital Art" detailsUrl="/gallery/digital_art" files={digital}/>
      <GalleryPreview header="Eco Art" detailsUrl="/gallery/eco_art" files={ecoArt}/>
      <GalleryPreview header="Eco Jewellery" detailsUrl="/gallery/eco_jewellery" files={ecoJewel}/>
      <GalleryPreview header="Drawing" detailsUrl="/gallery/drawing" files={drawing}/>
      <GalleryPreview header="Study Painting" detailsUrl="/gallery/study_painting" files={studyPainting}/>
      <GalleryPreview header="Wearable Art" detailsUrl="/gallery/wearable_art" files={wearableArt}/>
      <GalleryPreview header="More art" detailsUrl="/gallery/more_art" files={moreArt}/>
    </div>
  )
};
