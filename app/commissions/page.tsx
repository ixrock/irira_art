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
      <p>
        I would be happy to create your portrait in oil or watercolor with
        colored pencils (I enjoy combining these materials). The portrait can also be
        done in other mediums, which we can discuss.
        I can paint a classic portrait of you or add elements of magic! I can choose
        an image that reflects your soul, inner essence, and the beautiful part of your
        personality! We can have a brief conversation so I can understand the colors
        and elements that will best express this. Using classical academic portrait
        techniques, along with creativity and intuitive painting, I will create a
        unique portrait just for you.
      </p>
      <br/>
      <div className={styles.images}>
        <PhotoPreview src="/img/commissons/DSCN6792.jpg"/>
        <PhotoPreview src="/img/commissons/estas_tonne.jpg"/>
        <PhotoPreview src="/img/commissons/DSCN7050.jpg"/>
        <PhotoPreview src="/img/oil_painting/00_3_IMG_9695(1).jpeg"/>
        <PhotoPreview src="/img/study_painting/IMG_9560_edited(1).jpeg"/>
        <PhotoPreview src="/img/study_painting/IMG_9553_edited(1).jpeg"/>
      </div>
      <br/>
      <h3>Your idea</h3>
      If you have a specific idea of an art piece you want, please feel free to share your vision with me
      and we can discuss how to make it happen! I can use my skills in oil paint or work with natural materials,
      such as fruit seeds and beans (check my art works for examples). An art piece that is brought to life from
      your own idea makes a really special gi for your friend or relative.
      <br/>
      <br/>
      <h3>Invitation cards</h3>
      Are you having a wedding or some other event where you need a creative invitation cards? Please, let me know, my art works and unique style will bring colourfulness to any event! I can design
      them using Photoshop or Vector art, make it from a pencil drawing or a watercolor painting.
      <br/>
      <br/>
      <h3>Prints</h3>
      My paintings are available both as original works and as prints on canvas,
      paper, and photo vinyl. The enchanting and magical atmosphere of my captivating
      images—vivid Mexican dancers, goddesses, Tibetan monks, and Indigenous
      people—can now adorn any home, inspiring good deeds! These vibrant pieces also
      create a pleasant atmosphere at home, where one can sit peacefully in the
      evening with a cup of tea and dream. Perhaps my work will inspire you to pursue
      your own cherished dreams and plans, and, most importantly, bring a sense of
      possibility that they can all come true!
      I also used to make tote bags featuring prints of my work, which is still an
      option—a unique, high-quality tote bag with double-sided printing! Feel free to
      reach out!
      <br/>
      <br/>
      <h3>Drawing and Paintings</h3>
      I’m now offering drawing and painting lessons for
      everyone interested! Both group and individual sessions are available, either
      in-person or online! My lessons follow classical standards of drawing and
      painting, along with creative sessions that help you express your unique,
      individual nature!
      It’s so important to step away from daily tasks and immerse yourself in the
      artistic world of creativity, to relax, shift focus, and listen to the voice of
      your soul. Plus, drawing and painting are wonderful ways to relieve stress.
      I can teach the art of still life, drawing and painting people from life or
      from photos, as well as landscapes from life or photos. Lessons include
      fundamental knowledge of light and shadow, color theory, and composition. I
      also offer creative sessions: flow and intuitive drawing, and the creation of a
      unique Soul painting that will enhance any interior and bring new life to your
      home!
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