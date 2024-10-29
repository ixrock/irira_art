import "./footer.css"
import React from "react";
import Image from "@/node_modules/next/image";

export const iconSize = 25;

export default function Footer() {
  return (
    <footer className="socialIcons">
      <a href="https://vk.com/uniqueartcreations" target="_blank">
        <Image src="/vk.svg" width={iconSize} height={iconSize} alt="Vk.com"/>
      </a>
      <a href="https://www.facebook.com/Mudra-Unique-Art-Creations-By-Iri-262591347114916/" target="_blank">
        <Image src="/facebook.svg" width={iconSize} height={iconSize} alt="Facebook"/>
      </a>
      <a href="https://www.instagram.com/iri.ra_art" target="_blank">
        <Image src="/instagram.svg" width={iconSize} height={iconSize} alt="Instagram"/>
      </a>
      <a href="https://www.youtube.com/@irira4006" target="_blank">
        <Image src="/youtube.svg" width={iconSize} height={iconSize} alt="YouTube Channel"/>
      </a>
    </footer>
  )
}
