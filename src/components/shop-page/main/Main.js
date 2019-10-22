import React, { useRef, useEffect, useState } from "react";
import "../../sass/main/main.scss";
import slider__womansSmall from "../../sass/img/woman-source.jpg";
import slider__mansSmall from "../../sass/img/slider__mans-big.jpg";
import slider__kidsSmall from "../../sass/img/kids-source.jpg";

const Main = () => {
  const sliderMainContainer = useRef(null);
  const sliderFirstImage = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const imgs = document.querySelectorAll(".slider__pictures img");

  const [sizeOfImg, useSizeOfImg] = useState(0);
  const [counter, useCounter] = useState(1);
  // Counter
  const getSize = () => {
    const size = sliderFirstImage.current.clientWidth || 0;
    useSizeOfImg(size);
  };
  window.addEventListener("resize", () => {
    getSize();
  });
  useEffect(() => {
    getSize();
  });

  const sliderSetting = value => {
    sliderMainContainer.current.style.transition = "transform .5s ease-in-out";
    useCounter(value);
    sliderMainContainer.current.style.transform =
      "translateX(" + -sizeOfImg * counter + "px)";
  };

  // Button Listeners

  // NEXT
  const handleNextSlide = () => {
    if (counter >= imgs.length - 1) return;
    sliderSetting(counter + 1);
  };

  // PREVIOUS

  const handlePrevSlide = () => {
    if (counter <= 0) return;
    sliderSetting(counter - 1);
  };

  // Trans-End

  const handleTransEnd = () => {
    if (imgs[counter].className.includes("slider__lastClone")) {
      sliderMainContainer.current.style.transition = "none";
      useCounter(imgs.length - 2);
      sliderMainContainer.current.style.transform =
        "translateX(" + -sizeOfImg * counter + "px)";
    }

    if (imgs[counter].className.includes("slider__firstClone")) {
      sliderMainContainer.current.style.transition = "none";
      useCounter(imgs.length - counter);
      sliderMainContainer.current.style.transform =
        "translateX(" + -sizeOfImg * counter + "px)";
    }
  };

  return (
    <>
      <div className="slider">
        <button
          className="slider__prevBtn"
          ref={prevBtn}
          onClick={handlePrevSlide}
        >
          <span className="fas fa-arrow-left slider__icon-left"></span>
        </button>
        <button
          className="slider__nextBtn"
          ref={nextBtn}
          onClick={handleNextSlide}
        >
          <span className="fas fa-arrow-right slider__icon-right"></span>
        </button>
        <div
          className="slider__pictures"
          ref={sliderMainContainer}
          onTransitionEnd={handleTransEnd}
          style={{ transform: "translateX(" + -sizeOfImg * counter + "px)" }}
        >
          <img
            src={slider__kidsSmall}
            className="slider__lastClone slider__picture"
            ref={sliderFirstImage}
          />
          <img src={slider__mansSmall} className="slider__picture" />
          <img src={slider__womansSmall} className="slider__picture" />
          <img src={slider__kidsSmall} className="slider__picture" />
          <img
            src={slider__mansSmall}
            className="slider__firstClone slider__picture"
          />
        </div>
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
