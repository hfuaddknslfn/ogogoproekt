"use client";
import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.container_wrapper}>
        <div className={style.image_icon_box}>
          <img
            className={style.image_icon}
            src="/assets/iconogogo.png"
            alt=""
          />
        </div>
        <div className={style.box_start}>
          <div className={style.container_icon_image}>
            <div className={style.container_card}>
              <h3 className={style.container_text}>
                г. Бишкек, ул. Ибраимова 115/1
              </h3>
              <Link href="/" className={style.container_text_next}>
                Пользовательское соглашение
              </Link>
            </div>
          </div>
          <div className={style.container_card}>
            <h3 className={style.container_text}>
              +996 (550) 312-312 ogogoacademy@gmail.com
            </h3>
            <Link href="/" className={style.container_text_next}>
              Лицензия на образовательную деятельность № LS200001652 от 03
              декабрь 2021
            </Link>
          </div>
          <div className={style.container_card}>
            <div className={style.container_card_inside}>
              <img
                className={style.container_messengers}
                src="/assets/wts.png"
                alt=""
              />
              <Link href="/" className={style.container_text_next}>
                WhatsApp
              </Link>
            </div>
            <div className={style.container_card_inside}>
              <img
                className={style.container_messengers}
                src="/assets/instagram.png"
                alt=""
              />
              <Link href="/" className={style.container_text_next}>
                Instagram
              </Link>
            </div>
            <div className={style.container_card_inside}>
              <img
                className={style.container_messengers}
                src="/assets/tg.png"
                alt=""
              />
              <Link href="/" className={style.container_text_next}>
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
