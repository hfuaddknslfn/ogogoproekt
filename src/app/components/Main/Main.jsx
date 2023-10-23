import React from "react";
import page from "./page.module.scss";
const Main = () => {
  return (
    <div className={page.container1}>
      <div className={page.container1_wrapper}>
        <div className={page.container1_info}>
          <div className={page.container1_card}>
            <h1 className={page.container1_text}>Знакомство </h1>
            <div className={page.rows__cont}>
              <h1 className={page.container1_text}>с</h1>
              <h1 className={page.container1_text_orangered}> OGOGO GROUP</h1>
            </div>
            <h1 className={page.container1_text2}>
              название говорит само за себя
            </h1>
            <div className={page.cont__buttons}>
              <button className={page.button1}>Подробней</button>
              <button className={page.button2}>Присоединиться</button>
            </div>
          </div>
          <div className={page.rows}>
            <img
              className={page.img_container1}
              src="/assets/rocket.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
