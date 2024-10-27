import "./home.css";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iri Ra - Spiritual artist",
}

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

      <div className="carousel">
        <Link href="/digital-art">
          <img src="/img/home/digitalart.jpg" alt="Digital art"/>
        </Link>
        <Link href="/eco-art">
          <img src="/img/home/eco_art.jpg" alt="Eco art"/>
        </Link>
        <Link href="/eco-jewellery">
          <img src="/img/home/jewellery.jpg" alt="Handcrafted jewellery"/>
        </Link>
        <Link href="/oil-painting">
          <img src="/img/home/oilpainting.jpg" alt="Oil painting"/>
        </Link>
      </div>

      <div className="flex gaps joinMe">
        <a href="https://www.facebook.com/Mudra-Unique-Art-Creations-By-Iri-262591347114916/" target="_blank">
          <img src="/img/home/join_me_fb.jpg" alt="Facebook"/>
        </a>
        <a href="https://www.instagram.com/iri_ra/" target="_blank">
          <img src="/img/home/join_me_insta.jpg" alt="Instagram"/>
        </a>
        {/* TODO: double check correct Youtube channel URL */}
        <a href="https://www.youtube.com/channel/UC4-Wf4aDDNmC1Ra1LSn3wqA" target="_blank">
          <img src="/img/home/join_me_youtube.jpg" alt="Youtube"/>
        </a>
      </div>
    </section>
  );
}
