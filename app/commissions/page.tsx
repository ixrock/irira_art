import styles from './commissions.module.css'
import React from "react";
import { Metadata } from "next";
import PhotoPreview from "@/app/components/photo-preview";

export const metadata: Metadata = {
  title: "Commissions",
}

export default function Commissions() {
  return (
    <section className={styles.commissions}>
      <h1>Commission art</h1>

      <h3>A portrait</h3>
      Considering an oil portrait of yourself, your beloved one, your child or other relative?
      I will be happy to make a portrait on a canvas from a photo of yours.
      It can be simple or I can add a touch of inner world of the exact person I am portraying.
      I can bring some details of his/her energy, add some beautiful ornaments that suits her/his personality.
      I’ll be glad to make it for you in my unique artistic style.
      <br/>
      <br/>
      <div className={styles.images}>
        <PhotoPreview src="/img/commissons/DSCN6792.jpg"/>
        <PhotoPreview src="/img/commissons/estas_tonne.jpg"/>
        <PhotoPreview src="/img/commissons/DSCN7050.jpg"/>
        <PhotoPreview src="/img/commissons/devushka.jpg"/>
        <PhotoPreview src="/img/commissons/KTSydGpaqVw.jpg"/>
      </div>
      <br/>
      <h3>Your idea</h3>
      If you have a specific idea of an art piece you want, please feel free to share your vision with me
      and we can discuss how to make it happen! I can use my skills in oil paint or work with natural materials,
      such as fruit seeds and beans (check my art works for examples). An art piece that is brought to life from
      your own idea makes a really special gi for your friend or relative.
      <br/>
      <br/>
      <h3>Wedding gift</h3>
      If you are searching for a unique wedding gi - consider a painting or an eco style art works of mine.
      Bring your idea of I can bring mine and as a result we will have a very unique present.
      Wedding is indeed a very special day , why not make a special present for lucky-in-love people.
      Take a look at this work I painted as a gi for a wedding. e original size is 50×60.
      On your order you can pick a size, borrow or create an idea, pick the colours, theme - only your imagination
      is a limit for options.
      <br/>
      <br/>
      <div className={styles.images}>
        <PhotoPreview src="/img/commissons/wedding-small.jpg"/>
        <PhotoPreview src="/img/commissons/wedding-gift.jpg"/>
      </div>
      <h3>Invitation cards</h3>
      Are you having a wedding or some other event where you need a creative invitation cards? Please, let me know, my art works and unique style will bring colourfulness to any event! I can design
      them using Photoshop or Vector art, make it from a pencil drawing or a watercolor painting.
      <br/>
      <br/>
      <h3>Jewellery</h3>
      I am passionate about handmade and want to share it with you through my jewelry.
      I make it in my own style from avocado seeds adding stones and feathers.
      Please, check my works and if that will inspire you to have a necklace like that for yourself,
      contact me via email and let’s discuss how to make it t your style and energy
      (or maybe a special c piece of clothing you want to wear it with).
      <br/>
      <br/>
      I make all my artworks with love, inspiration and continuous enthusiasm.
      All materials I use are high quality. I send commission artworks by post unless it is possible to meet you personally
      and give the arts piece from hands to hands.
    </section>
  )
}