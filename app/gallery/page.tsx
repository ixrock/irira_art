import { Metadata } from "next";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";

export const metadata: Metadata = {
  title: "My Art",
}

export default async function GalleryPreviews() {
  const maxPreviewPerCategory = 5;

  const [oil, digital, ecoArt, ecoJewel, moreArt] = await Promise.all([
    getFilesList("img/oil_painting"),
    getFilesList("img/digital_art"),
    getFilesList("img/eco_art"),
    getFilesList("img/eco_jewellery/main"),
    getFilesList("img/more_art/graphics"),
  ]);

  return (
    <div className="gallery-previews">
      <h1>Oil painting</h1>
      <Gallery files={oil.slice(0, maxPreviewPerCategory)}/>

      <h1>Digital Art</h1>
      <Gallery files={digital.slice(0, maxPreviewPerCategory)}/>

      <h1>Eco Art</h1>
      <Gallery files={ecoArt.slice(0, maxPreviewPerCategory)}/>

      <h1>Eco Jewellery</h1>
      <Gallery files={ecoJewel.slice(0, maxPreviewPerCategory)}/>

      <h1>More art</h1>
      <Gallery files={moreArt.slice(0, maxPreviewPerCategory)}/>
    </div>
  )
};
