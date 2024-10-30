import styles from './buy-now.module.css'
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buy now",
}

export default function BuyNow() {
  const imageWidth = 424;
  const imageHeight = 500;

  return (
    <section>
      <h1>Buy now</h1>
      <br/>
      <br/>
      <div className={styles.images}>
        <a href="https://www.saatchiart.com/account/profile/959668" target="_blank">
          <Image src="/img/buy/saatchiart.jpg" width={imageWidth} height={imageHeight} alt="Original art"/>
        </a>
        <a href="https://www.etsy.com/ru/shop/IriRaTreasures" target="_blank">
          <Image src="/img/buy/etsy.jpg" width={imageWidth} height={imageHeight} alt="Etsy"/>
        </a>
        <a href="http://www.redbubble.com/people/irira" target="_blank">
          <Image src="/img/buy/prints.jpg" width={imageWidth} height={imageHeight} alt="Prints"/>
        </a>
      </div>
      <br/>
      <p>
        CLICK ABOVE FOR ORIGINAL ARTWORKS, PRINTS, JEWELLERY FROM AVOCADO SEEDS AND ECO ART FROM SEEDS.
      </p>
    </section>
  )
}