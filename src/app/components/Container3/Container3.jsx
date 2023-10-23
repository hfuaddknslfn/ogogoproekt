import React from "react";
import cont3 from "./container3.module.scss";
import Link from "next/link";

const Container3 = () => {
  return (
    <div className={cont3.container3}>
      <div className={cont3.container3_wrapper}>
        <div className={cont3.container3_info}>
          <div className={cont3.container3_card}>
            <h1 className={cont3.text_taxi}>Ogogo Taxi</h1>
            <h2 className={cont3.cont3_text1}>
              Онлайн сервис для поиска, вызова и оплаты услуг такси которые
              могут использовать частные водители Кыргызстана ! С помощью
              приложения Ogogo taxi пассажир резервирует машину с водителем и
              отслеживает её перемещение к указанной точке в онлайн режиме.
            </h2>
            <h2 className={cont3.cont3_text1}>
              Слоган OGOGO TAXI это "Выгодно всем" поэтому основной целью
              компании является создать выгодные условия для всех: как для
              клиентов, так и для водителей. Также Огого такси это не только
              коммерческий, но и отчасти социальный проект. Так как он направлен
              на развитие внутренней экономики страны посредством предоставления
              новых рабочих мест и денежному обороту внутри страны.
            </h2>
            <div className={cont3.image_columns}>
              <Link href="/">
                <img src="/assets/appstore.png" alt="" />
              </Link>
              <Link href="/">
                <img src="/assets/market.png" alt="" />
              </Link>
            </div>
          </div>
          <div className={cont3.geo_location}>
            <img
              className={cont3.geo_location_image}
              src="/assets/geo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
