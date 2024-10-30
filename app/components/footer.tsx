import styles from "./footer.module.css"
import React from "react";
import Image from "@/node_modules/next/image";
import { fbLink, instagramLink, vkLink, youtubeLink } from "@/app/common-vars";

export default function Footer() {
  const iconSize = 25;

  return (
    <footer className={styles.socialIcons}>
      <a href={vkLink} target="_blank">
        <Image src="/vk.svg" width={iconSize} height={iconSize} alt="Vk.com"/>
      </a>
      <a href={fbLink} target="_blank">
        <Image src="/facebook.svg" width={iconSize} height={iconSize} alt="Facebook"/>
      </a>
      <a href={instagramLink} target="_blank">
        <Image src="/instagram.svg" width={iconSize} height={iconSize} alt="Instagram"/>
      </a>
      <a href={youtubeLink} target="_blank">
        <Image src="/youtube.svg" width={iconSize} height={iconSize} alt="YouTube Channel"/>
      </a>
    </footer>
  )
}
