import React from "react";
import cont4 from "./container4.module.scss";
import Link from "next/link";

const Container4 = () => {
  return (
    <div className={cont4.container4}>
      <div className={cont4.container4_wrapper}>
        <div className={cont4.container4_info}>
          <div className={cont4.container4_card}>
            <h1 className={cont4.text_taxi}>OGOGO академия</h1>
            <h2 className={cont4.cont4_text1}>
              Образовательное учреждение в котором люди любого возраста за
              короткие сроки могут получить качественное образование в сфере IT.
              Основная концепция OGOGO академии это дарить знания вместе с
              эмоциями, развивая не только технические навыки, но и личные
              качества наших студентов. Целью компании является взращивание
              новых конкурентоспособных IT специалистов для мирового рынка
              компьютерных технологий.
            </h2>
            <div className={cont4.image_columns}>
              <Link className={cont4.to_next_glav} href="/">
                <h1 className={cont4.to_next}>Перейти на страницу</h1>
              </Link>
            </div>
          </div>
          <div className={cont4.geo_location}>
            <img
              className={cont4.geo_location_image}
              src="/assets/aboutcourse.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container4;
