import styles from "./header.module.css"
import React from "react";
import Menu from "@/app/components/menu";

export default function Header() {
  return (
    <header>
      <div className={styles.logo}/>
      <Menu/>
    </header>
  )
}
