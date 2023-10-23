import React from "react";
import cont6 from "./container6.module.scss";

const Container6 = () => {
  return (
    <div className={cont6.container6}>
      <div className={cont6.container6_children}>
        <div className={cont6.aboutus_cont6}>
          <h1 className={cont6.aboutus_cont6_inside}>О нашей команде</h1>
        </div>
        <div className={cont6.container6_wrapper}>
          <div className={cont6.container6_card}>
            <img src="/assets/maria.png" alt="" />
            <h1>Мария</h1>
            <h4>Основатель компании</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/alena.png" alt="" />
            <h1>Алена</h1>
            <h4>Основатель компании</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/ahror.png" alt="" />
            <h1>Ахрор</h1>
            <h4>Основатель компании</h4>
          </div>
          <div className={cont6.container6_card}>
            <img src="/assets/anastasya.png" alt="" />
            <h1>Анастасия</h1>
            <h4>Основатель компании</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container6;
