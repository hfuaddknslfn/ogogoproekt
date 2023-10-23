import React from "react";
import cont5 from "./container5.module.scss";
import Link from "next/link";

const Container5 = () => {
  return (
    <div className={cont5.container5}>
      <div className={cont5.container5_wrapper}>
        <div className={cont5.container5_info}>
          <div className={cont5.container5_card}>
            <h1 className={cont5.text_taxi}>OGOGOG software</h1>
            <h2 className={cont5.cont5_text1}>
              Компания занимается внедрением информационных технологий в
              различные сферы предприятий, как для частных потребителей так и
              крупных предприятий.
            </h2>
            <h2 className={cont5.cont5_text1}>
              Наша компания помогает нашим клиентам раскрыть желаемый потенциал
              своего предприятия на совсем другой уровень с помощью интеграции
              инновационных идей и свежих тенденций в мире дизайна. Мы реализуем
              идеи наших клиентов с помощью качественно подобранных кадров в
              инфраструктуре IT.
            </h2>
          </div>
          <div className={cont5.geo_location}>
            <img
              className={cont5.geo_location_image}
              src="/assets/software.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container5;
