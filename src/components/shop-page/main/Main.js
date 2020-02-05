import React, { useRef, useEffect, useState } from "react";
import { TweenMax } from "gsap";
import "../../sass/main/main.scss";
import img_1 from "../../sass/img/product_offer.png";

const Main = () => {
  return (
    <>
      <div className="slider"></div>

      <div className="offer">
        <div className="offer__product">
          <h1 className="offer__product-title">polo</h1>
          <p className="offer__product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="offer__product-price">$45</span>
          <div className="offer__product-picture">
            <img
              src="/img/product_offer.png"
              alt="offers"
              className="offer__product-picture_img"
            />
          </div>
        </div>
        <div className="offer__product">
          <h1 className="offer__product-title">cap</h1>
          <span className="offer__product-price">$120</span>
          <div className="offer__product-picture">
            <img
              src="/img/product_offer2.png"
              alt="offers"
              className="offer__product-picture_img"
            />
          </div>
        </div>
        <div className="offer__product">
          <h1 className="offer__product-title">t-shirt</h1>
          <p className="offer__product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pulvinar.
          </p>
          <span className="offer__product-price">$60</span>
          <div className="offer__product-picture">
            <img
              src="/img/product_offer3.png"
              alt="offers"
              className="offer__product-picture_img"
            />
          </div>
        </div>
      </div>
      {/*<section className="quality">
        <div className="service">
          <p className="service__options">
            <i className="fas fa-user-shield service__icon"></i>
            <span className="service__title">SSL</span>Bezpieczne zakupy
          </p>
        </div>
        <div className="service">
          <p className="service__options">
            <i className="fas fa-sync service__icon"></i>
            <span className="service__title">30</span>dni na zwrot towaru
          </p>
        </div>
        <div className="service">
          <p className="service__options">
            <i className="fas fa-shuttle-van service__icon"></i>
            <span className="service__title">Szybka</span>wysyłka
          </p>
        </div>
        <div className="service">
          <p className="service__options">
            <i className="fas fa-tag service__icon"></i>
            <span className="service__title">Sprawdzona </span>jakość
          </p>
        </div>
        <div className="service">
          <p className="service__options">
            <i className="fas fa-hand-holding-usd service__icon"></i>
            <span className="service__title">Korzystne</span>ceny
          </p>
        </div>
  </section>*/}
    </>
  );
};
export default Main;
