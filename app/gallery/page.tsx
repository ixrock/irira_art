import styles from "./gallery.module.css";
import React from "react";
import { Metadata } from "next";
import { FileListing, getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";
import Link from "next/link";

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
    <div className={styles.gallery}>
      <GalleryPreview header="Oil painting" detailsUrl="/gallery/oil-painting" files={oil}/>
      <GalleryPreview header="Digital Art" detailsUrl="/gallery/digital-art" files={digital}/>
      <GalleryPreview header="Eco Art" detailsUrl="/gallery/eco-art" files={ecoArt}/>
      <GalleryPreview header="Eco Jewellery" detailsUrl="/gallery/eco-jewellery" files={ecoJewel}/>
      <GalleryPreview header="More art" detailsUrl="/gallery/more-art" files={moreArt}/>
    </div>
  )
};

interface GalleryPreviewProps {
  header: React.ReactNode;
  files: FileListing[];
  detailsUrl?: string;
  previewCount?: number; /* default: 5 */
}

function GalleryPreview(props: GalleryPreviewProps) {
  const { files, previewCount = 5, header, detailsUrl } = props;
  return (
    <>
      <h1>{header}</h1>
      <Gallery files={files.slice(0, previewCount)}/>
      {detailsUrl && (
        <div className={styles.showAll}>
          <Link href={detailsUrl}>Show all &rarr;</Link>
        </div>
      )}
    </>
  )
}
