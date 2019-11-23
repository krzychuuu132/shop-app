import React, { useRef, useEffect, useState } from "react";
import "../../sass/main/main.scss";
import img1 from "../../sass/img/clothes-1.jpg";
import img2 from "../../sass/img/clothes-2.jpg";
import img3 from "../../sass/img/clothes-3.jpg";
const Main = () => {
  const [counter, useCounter] = useState(1);
  // const lines = document.querySelectorAll(".slider__line");
  //const img = document.querySelector(".slider__img");

  const sliderTitle = useRef(null);
  const sliderText = useRef(null);
  const sliderImg = useRef(null);

  const nextSlide = direction => {
    if (direction === "right") {
      // useCounter(counter++);
    } else if (direction === "left") {
      //useCounter(counter--);
    }

    if (counter === 4) counter = 1;

    if (counter === 0) counter = 3;
    // changeSlide(counter);
  };

  return (
    <>
      <div className="slider">
        <img
          src={"/clothes-1.jpg"}
          alt="picture"
          className="slider__img"
          ref={sliderImg}
        />

        <div className="slider__lines">
          <span
            className="slider__line "
            onClick={() => changeSlide(1)}
            data-index="1"
          ></span>
          <span
            className="slider__line"
            onClick={() => changeSlide(2)}
            data-index="2"
          ></span>
          <span
            className="slider__line"
            onClick={() => changeSlide(3)}
            data-index="3"
          ></span>
        </div>

        <div className="slider__content">
          <p className="slider__title" ref={sliderTitle}>
            Nowa kolekcja
          </p>
          <h1 className="slider__text" ref={sliderText}>
            wiele różnych promocji
          </h1>
          <button className="slider__btn">kup teraz!</button>
        </div>
        <span
          className="fas fa-chevron-left slider__icon-left"
          onClick={nextSlide(`left`)}
        ></span>
        <span
          className="fas fa-chevron-right  slider__icon-right"
          onClick={nextSlide(`right`)}
        ></span>
        <div className="slider__backgr"></div>
      </div>

      <section className="quality">
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
      </section>
    </>
  );
};
export default Main;

/* */
