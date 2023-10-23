import React from "react";
import cont6 from "./container9.module.scss";

const Container9 = () => {
  return (
    <div className={cont6.container6}>
      <div className={cont6.container6_children}>
        <div className={cont6.aboutus_cont6}>
          <h1 className={cont6.aboutus_cont6_inside1}>Открытые вакансии</h1>
          <h2 className={cont6.aboutus_cont6_inside2}>
            Стань частью нашей компании
          </h2>
        </div>
        <div className={cont6.container6_wrapper}>
          <div className={cont6.container6_card}>
            <img src="/assets/pink.png" alt="" />
            <h1>UX/UI designer</h1>
            <h4>13 марта</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/laptop.png" alt="" />
            <h1>Fronted developer</h1>
            <h4>13 марта</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/swift.png" alt="" />
            <h1>SWIFT developer</h1>
            <h4>13 марта</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/poco.png" alt="" />
            <h1>Android developer</h1>
            <h4>13 марта</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container9;
