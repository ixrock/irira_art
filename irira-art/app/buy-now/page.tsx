import styles from './buy-now.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commissions",
}

export default function BuyNow() {
  return (
    <section className={styles.buyNow}>
      <h1>Buy now</h1>
      <br/>
      <br/>
      <div className="flex gaps">
        <a href="https://www.saatchiart.com/account/profile/959668" target="_blank">
          <img src="/img/buy/saatchiart.jpg" alt="Original art"/>
        </a>
        <a href="https://www.etsy.com/ru/shop/IriRaTreasures" target="_blank">
          <img src="/img/buy/etsy.jpg" alt="Etsy"/>
        </a>
        <a href="http://www.redbubble.com/people/irira" target="_blank">
          <img src="/img/buy/prints.jpg" alt="Prints"/>
        </a>
      </div>
      <br/>
      <p>
        CLICK ABOVE FOR ORIGINAL ARTWORKS, PRINTS, JEWELLERY FROM AVOCADO SEEDS AND ECO ART FROM SEEDS.
      </p>
    </section>
  )
}