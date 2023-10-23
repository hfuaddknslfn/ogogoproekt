"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.scss";
// import BurgerMenu from "../Burger/Burgermenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__headerWrapper}>
        <div className={styles.header_img}>
          <img
            className={styles.header_img}
            src="/assets/logo.png"
            alt="logo"
          />
        </div>
        {/* <BurgerMenu /> */}
        <nav>
          <ul>
            <li className={styles.info}>
              <Link className={styles.info_inside} href=" ">
                О нас
              </Link>
            </li>
            <li className={styles.info}>
              <Link className={styles.info_inside} href=" ">
                Наши проекты
              </Link>
            </li>
            <li className={styles.info}>
              <Link className={styles.info_inside} href=" ">
                Последние новости
              </Link>
            </li>
            <li className={styles.info}>
              <Link className={styles.info_inside} href=" ">
                Контакты
              </Link>
            </li>
            <a className={styles.info_inside2} href="tel:+996550312312">
              +996 (550) 312 312
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
