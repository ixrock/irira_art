"use client";

import styles from "./menu.module.css"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { cssNames } from "@/app/utils";

export interface MenuItem {
  name: string;
  href: string;
  subMenu?: MenuItem[];
}

export const siteMenu: MenuItem[] = [
  { "name": "Home", "href": "/" },
  { "name": "About", "href": "/about" },
  {
    "name": "My Art", "href": "/gallery", "subMenu": [
      { "name": "Oil Painting", "href": "/gallery/oil-painting" },
      { "name": "Eco Art", "href": "/gallery/eco-art" },
      { "name": "Eco Jewellery", "href": "/gallery/oil-jewellery" },
      { "name": "Digital art", "href": "/gallery/digital-art" },
      { "name": "More art", "href": "/gallery/more-art" },
    ],
  },
  { "name": "Commissions", "href": "/comissions" },
  { "name": "Buy now", "href": "/buy-now" },
  { "name": "Contact me", "href": "mailto:artofirira@gmail.com" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <menu className={styles.Menu}>
      {siteMenu.map(({ name, href, subMenu }) => {
        if (subMenu) {
          return (
            <div key={href} className={cssNames(styles.subMenu, { [styles.active]: pathname === href })}>
              <Link href={href}>▼ {name}</Link>
              <div className={styles.items}>
                {subMenu.map(({ name, href }) => {
                  return (
                    <Link key={href} href={href} className={cssNames({ [styles.active]: pathname === href })}>
                      {name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        }

        return <Link key={href} href={href}>{name}</Link>
      })}
    </menu>
  );
}
