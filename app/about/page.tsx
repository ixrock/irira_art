import styles from './about.module.css'
import { Metadata } from "next";
import { cssNames } from "@/app/utils";

export const metadata: Metadata = {
  title: "About me",
}

export default function About() {
  return (
    <section className={styles.About}>
      <img src="/img/about/at_work.jpg" alt="At work"/>
      <br/>
      <br/>
      I’m Iri Ra &mdash; a young artist originally from Russia, Saint Petersburg. I began studying art from a little age, first in an art school then, after moving with my family to Finland, I started
      to learn art by myself. I also visited art classes in Irida Art School and studied art from Russian artists Viktor Markelov and Elena Kor in their gallery in Helsinki. Finished Graphic Design
      College «Vantaan ammattiopisto Varia».
      <br/>
      <br/>
      Now I make my artworks in Finland, embodying my spiritual and surreal ideas into a form of painting and often visiting Russia for art courses to develop my skills.
      My art can be divided into 2 parts: oil painting and artworks from natural materials. My oil paintings are compositions from imagination, a play with different colors. Artworks from fruit seeds
      are eco slow art, a new way to make art from Mother Nature.
      <br/>
      <br/>
      My intention is to show through my art a beautiful world inside us all, to motivate observers in changing their lives, developing their spirits, minds and bodies, to see their inner selves and
      think about their fulfillment on this planet.
      <br/>
      <br/>
      I have exhibitions in Helsinki at yoga clubs, cafes and events. I have visited a Natural High Healing Festival in Finland at 2015 as a painter, had an exhibition there and made some live
      painting.
      As an artist, I am interested in different forms of art, such as theater.
      I was on the stage with a theater project named “Kuka pelkää pimeää?» in the National Theater of Helsinki.
      <br/>
      <br/>
      <div className={cssNames(styles.images, "flex gaps")}>
        <p><img src="/img/about/in_flowers.jpg" alt="Flowers mood"/></p>
        <p><img src="/img/about/in_woods.jpg" alt="Into the wild"/></p>
      </div>
      <br/>
      Now I also discovered for myself a dance expression through a tribal fusion dance style.
      I like to travel and take ideas from my trips, finding and opening new things inside and around me. That brings something new to my artworks.
      <br/>
      <br/>
      In my art I combine surrealism and realism, fantasy and spiritual themes. I also combine two art schools, Finnish and Russian. Those are two cultures that give me a lot into creating my
      artworks. Russian art school is strong in Academic classical art, when Finnish art school is more about expressing the feelings and emotions. I have a possibility to take best from both of them
      and put it together.
      <br/>
      <br/>
      The idea of an artwork made from natural materials is to show how beautiful Nature can be and how to do art from it. We can’t really grow an avocado tree or a date tree in North. So in our cold
      climate I found a way to use seeds from fruits in an artistic way instead of putting them into a trash. You can find art in everything you see, also in natural seeds! The idea to do this came to
      me in a time when I was a raw vegetarian. I ate a lot of fruits, but instead of throwing the seeds away I found a new creation for them! So the idea of this art is also in motivating people to
      eat healthy, to eat more fruits, because there is wealth inside of them.
    </section>
  )
}