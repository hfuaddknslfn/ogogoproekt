"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import swiper from "./slider.module.scss";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className={swiper.container2}>
        <div className={swiper.container2_wrapper}>
          <div className={swiper.about_us}>
            <h1>О нас</h1>
          </div>
          <Swiper
            slidesPerView={5}
            centeredSlides={false}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={swiper.mySwiper}
            initialSlide={0}
            loopAdditionalSlides={5}
          >
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/whitehome.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/lake.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/red.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/blackpers.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/lognhouse.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={swiper.cont_wrapper}>
              <img className={swiper.img} src="/assets/lognhouse.png" alt="" />
            </SwiperSlide>
          </Swiper>
          <div className={swiper.container2_text}>
            <p className={swiper.container2_text_inside}>
              Компания Огого групп это стремительно развивающаяся IT компания
              активно работающая с образовательной частью в it технологиях
              помогающая предприятиям настраивать бизнес процессы через
              информационных технологии . Наша цель это создание более 1000+
              рабочих мест по всем странам СНГ , развитие экономического рынка
              Кыргызстана и стремление улучшения уровня жизни наших
              соотечественников во всем мире .Огого это корень развития{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
