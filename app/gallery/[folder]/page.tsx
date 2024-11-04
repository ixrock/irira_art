import React from "react";
import { getFilesList } from "@/app/server-actions";
import Gallery from "@/app/components/gallery";
import { redirect } from "next/navigation";
import { getGalleryViewFromPageParams } from "@/app/gallery/gallery-views";

export interface GalleryFolderViewPageParams extends Record<string, string> {
  folder: string; /* Images located in `/public/img/[name]` */
}

export async function generateMetadata({ params }: { params: Promise<GalleryFolderViewPageParams> }) {
  const view = getGalleryViewFromPageParams(await params);

  return {
    title: view?.pageTitle,
  }
}

export default async function Page({ params }: { params: Promise<GalleryFolderViewPageParams> }) {
  const view = getGalleryViewFromPageParams(await params);

  if (!view) {
    redirect("/gallery");
  }

  const { publicPath, headerTitle, pageTitle } = view;
  const files = await getFilesList(publicPath);

  return (
    <section>
      <h1>{pageTitle ?? headerTitle}</h1>
      <Gallery files={files}/>
    </section>
  )
};