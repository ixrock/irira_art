import { type GalleryFolderViewPageParams } from "@/app/gallery/[folder]/page";

export interface GalleryView {
  pageTitle: string;
  headerTitle?: string; /* same as `pageTitle` by default */
  publicPath: string; /* public folder path, e.g. `/img/[name]` */
}

export const galleryViews: GalleryView[] = [
  {
    pageTitle: "Oil Painting",
    publicPath: "/img/oil_painting",
  },
  {
    pageTitle: "Drawing",
    publicPath: "/img/drawing",
  },
  {
    pageTitle: "Digital Art",
    publicPath: "/img/digital_art",
  },
  {
    pageTitle: "Eco seed art",
    publicPath: "/img/eco_art",
  },
  {
    pageTitle: "Study Painting",
    publicPath: "/img/study_painting",
  },
  {
    pageTitle: "Wearable Art",
    publicPath: "/img/wearable_art",
  }
];

export function getGalleryViewFromPageParams({ folder }: GalleryFolderViewPageParams) {
  return galleryViews.find(view => view.publicPath.endsWith(`/${folder}`));
}
