import styles from './gallery.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Art",
}

export default function Gallery() {
  return (
    <section>
      <h3>My Art</h3>
      <div className={styles.gallery}>

      </div>
      <small>
        [TODO]: add gallery previews (up to 10-20 photos):
        include "oil-painting";
        include "eco-art";
        include "eco-jewellery";
        include "digital-art";
      </small>
    </section>
  )
};