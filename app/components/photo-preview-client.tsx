"use client";

import styles from "./photo-preview.module.css"
import React, { useState } from "react";
import type sharp from "sharp";
import Link from "next/link";
import Image from "next/image";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { Dialog } from "@/app/components/dialog";
import { delay } from "@/app/utils";

export interface PhotoPreviewClientProps {
  src: string;
  width: number;
  height: number;
  className?: string;
  metadata: Partial<sharp.Metadata>;
  alt?: string;
}

export default function PhotoPreviewClient(props: PhotoPreviewClientProps) {
  const { src, className, width, height, metadata, alt } = props;
  const [showPreview, showPreviewActivate] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const altText = alt ?? src.substring(src.lastIndexOf("/") + 1);

  const onClick = async (evt: React.MouseEvent) => {
    evt.preventDefault();
    showPreviewActivate(true);
    await delay(100); // NB: for some reason, without delay <LoadingIndicator/> doesn't show up
    preloadImage(src).then(() => setImageReady(true));
  };

  return (
    <>
      <Link
        href={src}
        className={styles.PhotoPreviewClient}
        onClick={onClick}
      >
        <Image
          src={src}
          className={className}
          width={width}
          height={height}
          alt={altText}
        />
      </Link>
      {showPreview && (
        <Dialog onClose={() => showPreviewActivate(false)}>
          {!imageReady && <LoadingIndicator/>}
          {imageReady && <Image src={src} width={metadata.width} height={metadata.height} alt=""/>}
        </Dialog>
      )}
    </>
  )
}

export async function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
