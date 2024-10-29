import styles from "./gallery.module.css"
import React from "react";
import Image from "@/node_modules/next/image";
import type { FileListing } from "@/app/server-actions";

export interface GalleryProps {
  files: FileListing[];
  outputWidth?: number; /* default: 250 */
}

export default function Gallery(props: GalleryProps) {
  const { files, outputWidth = 250 } = props;

  return (
    <div className={styles.gallery}>
      {files.map((({ publicPath, fileName, metadata }) => {
        const { width = 0, height = 0 } = metadata;
        const k = width / height;
        const newWidth = Math.min(width, outputWidth);
        const newHeight = newWidth * k;

        return (
          /* TODO: preload and open in dialog instead of link */
          <a key={publicPath} href={publicPath} target="_blank">
            <Image
              className={styles.image}
              src={publicPath}
              width={newWidth}
              height={newHeight}
              alt={fileName}
            />
          </a>
        );
      }))}
    </div>
  )
}
