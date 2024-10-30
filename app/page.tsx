import "./css/home.css";
import React from "react";
import { Metadata } from "next";
import { Carousel, CarouselItem } from "@/app/components/carousel";
import { fbLink, instagramLink, youtubeLink } from "@/app/common-vars";

export const metadata: Metadata = {
  title: "Iri Ra - Spiritual artist",
}

const carouselItems: CarouselItem[] = [
  {
    imageSrc: "/img/home/digitalart.jpg", // 1200x374
    title: "Digital art",
    linkUrl: "/gallery/digital-art"
  },
  {
    imageSrc: "/img/home/eco_art.jpg",
    title: "Eco art",
    linkUrl: "/gallery/eco-art"
  },
  {
    imageSrc: "/img/home/jewellery.jpg",
    title: "Handcrafted jewellery",
    linkUrl: "/gallery/eco-jewellery"
  },
  {
    imageSrc: "/img/home/oilpainting.jpg",
    title: "Oil painting",
    linkUrl: "/gallery/oil-painting"
  }
];

export default function Home() {
  return (
    <section className="home">
      <div className="welcome">
        <h1>Welcome to magical realm of my art!</h1>
        <p>
          Hello there. I'm Iri Ra, spiritual artist.
          I create visionary art, eco art and eco jewellery.
          Thank you for visiting my website!
        </p>
      </div>

      <Carousel items={carouselItems}/>

      <div className="joinMe">
        <a href={fbLink} target="_blank">
          <img src="/img/home/join_me_fb.jpg" alt="Facebook"/>
        </a>
        <a href={instagramLink} target="_blank">
          <img src="/img/home/join_me_insta.jpg" alt="Instagram"/>
        </a>
        <a href={youtubeLink} target="_blank">
          <img src="/img/home/join_me_youtube.jpg" alt="Youtube"/>
        </a>
      </div>
    </section>
  );
}
