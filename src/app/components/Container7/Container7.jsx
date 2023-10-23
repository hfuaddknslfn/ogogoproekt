import React from "react";
import cont7 from "./container7.module.scss";
const Container7 = () => {
  return (
    <div className={cont7.container7_glav}>
      <div className={cont7.container7}>
        <div className={cont7.container7_children}>
          <h1 className={cont7.text}>Новости</h1>
          <div className={cont7.grid_container7}>
            <div className={cont7.container7_rows}>
              <div className={cont7.container7_card}>
                <img
                  className={cont7.container7_img2}
                  src="/assets/baby.png"
                  alt=""
                />
              </div>
              <div className={cont7.container7_card}>
                <img
                  className={cont7.container7_img3}
                  src="/assets/phone.png"
                  alt=""
                />
              </div>
            </div>
            <div className={cont7.container7_rows2}>
              <div className={cont7.container7_card}>
                <img
                  className={cont7.container7_img}
                  src="/assets/ps5.png"
                  alt=""
                />
              </div>
              <div className={cont7.container7_card}>
                <img
                  className={cont7.container7_img2}
                  src="/assets/nega.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container7;
