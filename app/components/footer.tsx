import styles from "./footer.module.css"
import React from "react";
import { fbLink, instagramLink, tiktokLink, vkLink, youtubeLink } from "@/app/config";

export default function Footer() {
  return (
    <footer className={styles.socialIcons}>
      <a href={vkLink} target="_blank">
        <img src="/vk.svg" alt="Vk.com"/>
      </a>
      <a href={fbLink} target="_blank">
        <img src="/facebook.svg" alt="Facebook"/>
      </a>
      <a href={instagramLink} target="_blank">
        <img src="/instagram.svg" alt="Instagram"/>
      </a>
      <a href={youtubeLink} target="_blank">
        <img src="/youtube.svg" alt="YouTube Channel"/>
      </a>
      <a href={tiktokLink} target="_blank">
        <img src="/tiktok-circle-black.svg" alt="TikTok Channel" className={styles.tikTok}/>
      </a>
    </footer>
  )
}
