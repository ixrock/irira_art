"use client";

import styles from "./menu.module.css"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { cssNames, IClassName, IClassNameMap } from "@/app/utils";
import { contactEmail } from "@/app/config";
import EmailIconSvg from "@/public/email.svg";
import DotsIconSvg from "@/public/dots.svg";

export interface MenuItem {
  name: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
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
      { "name": "Eco Jewellery", "href": "/gallery/eco-jewellery" },
      { "name": "Digital art", "href": "/gallery/digital-art" },
      { "name": "Drawing", "href": "/gallery/drawing" },
      { "name": "Study Painting", "href": "/gallery/study_painting" },
      { "name": "Wearable Art", "href": "/gallery/wearable_art" },
      { "name": "More art", "href": "/gallery/more-art" },
    ],
  },
  { "name": "Commissions", "href": "/commissions" },
  { "name": "Buy now", "href": "/buy-now" },
  {
    "name": "Contact me",
    "href": `mailto:${contactEmail}`,
    icon: <EmailIconSvg className={styles.Icon}/>,
  },
];

export default function Menu() {
  const pathname = usePathname();

  function getLinkClassNames(href: string): IClassNameMap {
    return {
      [styles.active]: pathname === href,
    };
  }

  const menuItems = siteMenu.map((menuItem) => {
    const { name, href, subMenu, className, icon } = menuItem;
    const classNames = cssNames(getLinkClassNames(href), className);

    if (subMenu) {
      return (
        <SubMenuItem
          key={href}
          item={menuItem}
          className={cssNames(className, getLinkClassNames(href))}
          subMenu={subMenu.map((item) => ({
            ...item,
            className: getLinkClassNames(item.href),
          }))}
        />
      )
    }

    return (
      <Link key={href} href={href} className={classNames}>
        {icon}{name}
      </Link>
    )
  });

  return (
    <menu className={styles.Menu}>
      {menuItems}

      <div className={cssNames(styles.mobileMenu, styles.SubMenu)}>
        <DotsIconSvg/>
        <div className={styles.items}>{menuItems.slice(3)}</div>
      </div>
    </menu>
  );
}

export interface SubMenuItemProps {
  className?: IClassName;
  item: MenuItem;
  subMenu: MenuItem[];
}

export function SubMenuItem({ item, subMenu, className }: SubMenuItemProps) {
  const { href, name, icon } = item;

  return (
    <div key={href} className={styles.SubMenu}>
      <Link href={href} className={cssNames(className, styles.link)}>
        {icon}{name}
      </Link>
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