"use client";

import styles from "./menu.module.css"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { cssNames, IClassName, IClassNameMap } from "@/app/utils";

export interface MenuItem {
  name: string;
  href: string;
  subMenu?: MenuItem[];
  className?: IClassName;
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
  { "name": "Commissions", "href": "/commissions" },
  { "name": "Buy now", "href": "/buy-now" },
  { "name": "Contact me", "href": "mailto:artofirira@gmail.com" },
];

export default function Menu() {
  const pathname = usePathname();

  function getLinkCSSProps(href: string): IClassNameMap {
    return {
      [styles.active]: pathname === href,
    };
  }

  return (
    <menu className={styles.Menu}>
      {siteMenu.map((menuItem, index) => {
        const { name, href, subMenu } = menuItem;

        if (subMenu) {
          return (
            <SubMenuItem
              key={href}
              item={menuItem}
              className={getLinkCSSProps(href)}
              subMenu={subMenu.map((item) => ({
                ...item,
                className: getLinkCSSProps(item.href),
              }))}
            />
          )
        }

        return (
          <Link key={href} href={href} className={cssNames(getLinkCSSProps(href))}>
            {name}
          </Link>
        )
      })}
    </menu>
  );
}

export interface SubMenuItemProps {
  className?: IClassName;
  item: MenuItem;
  subMenu: MenuItem[];
}

export function SubMenuItem({ item, subMenu, className }: SubMenuItemProps) {
  const { href, name } = item;

  return (
    <div key={href} className={styles.subMenu}>
      <Link href={href} className={cssNames(className)}>▼ {name}</Link>
      <div className={styles.items}>
        {(subMenu as MenuItem[]).map(({ name, href, className }) => {
          return (
            <Link key={href} href={href} className={cssNames(className)}>
              {name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}