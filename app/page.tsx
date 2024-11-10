import "./css/home.css";
import React from "react";
import { Metadata } from "next";
import { Carousel, CarouselItem } from "@/app/components/carousel";
import { instagramLink, tiktokLink, youtubeLink } from "@/app/config";

export const metadata: Metadata = {
  title: "Iri Ra - Spiritual artist",
}

// 1200x374
const carouselItems: CarouselItem[] = [
  {
    imageSrc: "/img/home/eco_art.jpg",
    title: "Eco art",
    linkUrl: "/gallery/eco_art"
  },
  {
    imageSrc: "/img/home/oil_painting.jpeg",
    title: "Oil painting",
    linkUrl: "/gallery/oil_painting"
  },
  {
    imageSrc: "/img/home/jewellery.jpg",
    title: "Handcrafted jewellery",
    linkUrl: "/gallery/eco_jewellery"
  }
];

export default function Home() {
  return (
    <section className="home">
      <div className="welcome">
        <h1>Welcome to magical realm of my art!</h1>
        <p>
          Hello there! I am Iri Ra, a professional artist working in the styles of magical realism, symbolism, and visionary art.
          I paint with oil, create artworks from natural materials, and make jewelry from avocado seeds.
          Welcome to my wonderful world!
        </p>
      </div>

      <Carousel items={carouselItems}/>

      <div className="joinMe">
        <a href={instagramLink} target="_blank">
          <img src="/img/home/knopka1.jpeg" alt="Follow me on Instagram"/>
        </a>
        <a href={tiktokLink} target="_blank">
          <img src="/img/home/knopka2.jpeg" alt="Follow me on TikTok"/>
        </a>
        <a href={youtubeLink} target="_blank">
          <img src="/img/home/knopka3.jpeg" alt="My Videos at Youtube"/>
        </a>
      </div>
    </section>
  );
}
