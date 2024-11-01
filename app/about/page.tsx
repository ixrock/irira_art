import styles from './about.module.css'
import { Metadata } from "next";
import { cssNames } from "@/app/utils";

export const metadata: Metadata = {
  title: "About me",
}

export default function About() {
  return (
    <section className={styles.About}>
      <p>Hello everyone! I am a professional artist. I graduated from the faculty of classical academic painting at St. Petersburg State University. I am skilled in drawing people from life and
        painting portraits in oil, with a strong knowledge of anatomy, composition, and color. But what I love most is painting the worlds I imagine—things that may not exist in reality, but which
        I bring to life on canvas. I create my paintings with love, dedication, and passion for art.</p>

      <img src="/img/about/at_work.jpg" alt="At work"/>

      <p>I am an artist specializing in oil paintings in the genres of magical realism, symbolism, and visionary art. My work aims to bridge the worlds of the seen and unseen, exploring deeper
        layers of consciousness and the mystical side of reality. Through symbolic imagery and vivid colors, I seek to create pieces that invite the viewer to embark on a journey of inner
        discovery and reflection. Each painting tells its own story, blending dreamlike elements with subtle details meant to evoke a sense of wonder and contemplation.</p>

      <p>My intention is to show through my art a beautiful world inside us all, to motivate observers in changing their lives, developing their spirits, minds and bodies, to see their inner selves
        and think about their fulfillment on this planet.</p>

      <p>In my paintings, I use symbols, each of which has its own meaning. Before creating a painting, while developing a sketch, I study the symbols and their meanings that will appear in my work.
        I read books and research on this subject, and then decide how and where to place each symbol. For example, the snake is a symbol of death and then rebirth, as it sheds its skin and gains
        new life. The moon has a similar meaning.</p>

      <p>My paintings are filled with female figures—Goddesses from various mythologies and women who love and value themselves. Every Goddess is, in fact, a woman. My goal is that each woman who
        sees my artwork will find and awaken within herself a beautiful Goddess, reconnecting with her divine feminine nature—her soul. In our times, women have faced much suffering, so through my
        paintings, I want to inspire women to believe in themselves and regain confidence, to see in themselves the same beautiful Goddess that I have depicted on canvas with my own hand.</p>

      <div className={cssNames(styles.images, "flex gaps")}>
        <p><img src="/img/about/in_flowers.jpg" alt="Flowers mood"/></p>
        <p><img src="/img/about/in_woods.jpg" alt="Into the wild"/></p>
      </div>

      <p>I hope my art inspires women to heal, feel worthy, grow bolder, and find the strength to guide their lives. Through this, they can realize their potential and share their talents with the
        world, finding the right direction in life. My paintings allow women to seek the support of goddesses like Pachamama, the Earth Goddess; IX Cacao, the Mexican Goddess of Cacao; Selene, the
        Moon Goddess; the Sun Goddess, and others.</p>

      <p>I believe my art can make a difference, particularly for women, helping them see the true Goddess within themselves and become happier. It is essential to create this series and show women
        that they deserve to live joyfully.</p>

      <p>Men who see this series dedicated to Goddesses may come to view their mothers, sisters, friends, or wives differently, not just as a physical form but as an embodiment of their inner
        Goddess, a divine part capable of more than simply fulfilling material duties—capable of creating poetry, art, and loving with true, genuine love.</p>

      <p>The idea of an artwork made from natural materials is to show how beautiful Nature can be and how to do art from it. We can’t really grow an avocado tree or a date tree in North. So in our
        cold climate I found a way to use seeds from fruits in an artistic way instead of putting them into a trash. You can find art in everything you see, also in natural seeds! The idea to do
        this came to me in a time when I was a raw vegetarian. I ate a lot of fruits, but instead of throwing the seeds away I found a new creation for them! So the idea of this art is also in
        motivating people to eat healthy, to eat more fruits, because there is wealth inside of them.</p>

      <p>I'm originally from Russia. I began studying art from a little age, first in an art school then, after moving with my family to Finland, I started to learn art by myself. I also visited art
        classes in Irida Art School and studied art from Russian artists Viktor Markelov and Elena Kor in their gallery in Helsinki. Finished Graphic Design College «Vantaan ammattiopisto
        Varia».</p>

      <p>After this period of self-study and art courses in Finland, I enrolled in the art faculty at the university in St. Petersburg. Now I have graduated and am open to new opportunities and
        prospects!</p>
    </section>
  )
}