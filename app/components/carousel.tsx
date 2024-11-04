import styles from "./carousel.module.css"
import React from "react";
import Link from "next/link";

export interface CarouselProps {
  items: CarouselItem[];
  startDelaySec?: number; /* default: 1s */
  animationDurationSec?: number; /* default: 7s */
}

export interface CarouselItem {
  imageSrc: string;
  title: string;
  linkUrl?: string; /* render as a link */
}

export function Carousel({ items, animationDurationSec, startDelaySec }: CarouselProps) {
  const cssVariables = {
    '--slides': items.length,
    '--animStartDelaySec': startDelaySec,
    '--animDurationSec': animationDurationSec,
  } as React.CSSProperties;

  const itemsForSmoothRotation = [
    ...items,
    items[0], // duplicate first item for smoother animation rotation, this extends a bit real `props.animationDurationSec`
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
