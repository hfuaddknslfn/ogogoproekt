"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.scss";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={isOpen ? styles.navMenuOpen : styles.navMenu}>
        <ul>
          <li>
            <Link href="/">главное</Link>
          </li>
          <li>
            <Link href="/">главное</Link>
          </li>
          <li>
            <Link href="/">главное</Link>
          </li>
          <li>
            <Link href="/">главное</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
