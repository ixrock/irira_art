import styles from "./carousel.module.css"
import React from "react";
import Link from "next/link";

export interface CarouselItem {
  imageSrc: string;
  title: string;
  linkUrl?: string; /* render as a link */
}

export function Carousel({ items }: { items: CarouselItem[] }) {
  const cssVariables = {
    '--slides': items.length,
  } as React.CSSProperties;

  const itemsForSmoothRotation = [
    ...items,
    items[0], // duplicate first item for smoother animation rotation
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlider} style={cssVariables}>
        {itemsForSmoothRotation.map(({ imageSrc, title, linkUrl }, index) => {
          const key = index;
          const image = (
            <img
              key={key}
              className={styles.image}
              src={imageSrc}
              title={title}
              alt={title}
            />
          );

          if (linkUrl) {
            return <Link key={key} href={linkUrl}>{image}</Link>;
          }

          return image;
        })}
      </div>
    </div>
  );
}

export default Carousel;
