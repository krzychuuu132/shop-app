import React, { useRef, useEffect, useState } from "react";
import { TweenMax } from "gsap";
import "../../sass/main/main.scss";

const Main = () => {
  let [counter, useCounter] = useState(1);

  useEffect(() => {
    changeSlide(1, firstLine);
  }, [1]);

  const [src, useSrc] = useState("/img/clothes-1.jpg");
  const [sliderDescript, useSliderDescript] = useState([
    "Nowa kolekcja",
    "wiele różnych promocji"
  ]);

  let sliderTitle = useRef(null);
  let sliderText = useRef(null);
  let sliderImg = useRef(null);
  let sliderContent = useRef(null);
  let sliderBtn = useRef(null);
  let firstLine = useRef(null);
  let secondLine = useRef(null);
  let thirdLine = useRef(null);

  const contentAnim = index => {
    if (index === 1) {
      useSliderDescript(["Nowa kolekcja", "wiele różnych promocji"]);

      TweenMax.set([sliderContent, sliderTitle, sliderText, sliderBtn], {
        clearProps: "all"
      });

      TweenMax.from(sliderContent, { visibility: "hidden" });
      TweenMax.to(sliderContent, { visibility: "visible", x: 0 });
      //TweenMax.to(".slider__backgr", 1.2, { zIndex: 1, x: "100%", opacity: 0.9 }, 2)
      TweenMax.to(sliderTitle, 0.4, {
        ease: "back.out(1.7)",
        y: 0,
        visibility: "visible",
        delay: 0.8
      });
      TweenMax.to(sliderText, 0.8, {
        ease: "back.out(1.7)",
        x: 0,
        visibility: "visible",
        delay: 1
      });
      TweenMax.to(sliderBtn, 0.12, {
        ease: "back.out(1.7)",
        opacity: 1,
        y: 0,
        visibility: "visible",
        delay: 1.2
      });
    } else if (index === 2) {
      useSliderDescript(["Nie przegap okazji!", "Kupuj w naszym sklepie!"]);

      TweenMax.set([sliderContent, sliderTitle, sliderText, sliderBtn], {
        clearProps: "all"
      });

      TweenMax.to(sliderContent, {
        visibility: "visible",
        x: "40%",
        width: "auto"
      });

      TweenMax.to(sliderTitle, 0.4, {
        ease: "back.out(1.7)",
        y: 10,
        visibility: "visible",
        delay: 0.8
      });
      TweenMax.to(sliderText, 0.8, {
        ease: "back.out(1.7)",
        x: 0,
        y: 10,
        visibility: "visible",
        delay: 1
      });
    } else if (index === 3) {
      useSliderDescript([
        "promocja przy zakupie",
        "ubrania dla niej i dla niego!"
      ]);

      TweenMax.set([sliderContent, sliderTitle, sliderText, sliderBtn], {
        clearProps: "all"
      });

      TweenMax.to(sliderContent, {
        visibility: "visible",
        x: "7%",
        height: "100%",
        top: 0,
        backgroundColor: "rgba(255,0,0,0.5)"
      });

      TweenMax.to(sliderTitle, 0.8, {
        ease: "elastic.out(1, 0.3)",
        y: 10,
        visibility: "visible",
        delay: 0.8
      });

      TweenMax.to(sliderText, 0.1, {
        ease: "back.out(1.7)",
        x: 0,
        y: 20,
        visibility: "visible",
        delay: 1
      });
    }
  };

  const changeSlide = (index, element) => {
    contentAnim(index);

    firstLine.current.className = "slider__line";
    secondLine.current.className = "slider__line";
    thirdLine.current.className = "slider__line";

    element.current.className = "slider__line slider__line--active";
    useSrc(`/images/clothes-${index}.jpg`);
  };

  const handleWhichLine = counter => {
    if (counter === 1) return firstLine;
    else if (counter === 2) return secondLine;
    else if (counter === 3) return thirdLine;
  };
  return (
    <>
      <div className="slider">
        <img src={src} alt="picture" className="slider__img" ref={sliderImg} />
        <div className="slider__lines">
          <span
            className="slider__line "
            ref={firstLine}
            onClick={() => changeSlide(1, firstLine)}
          ></span>
          <span
            className="slider__line"
            ref={secondLine}
            onClick={() => changeSlide(2, secondLine)}
          ></span>
          <span
            className="slider__line"
            ref={thirdLine}
            onClick={() => changeSlide(3, thirdLine)}
          ></span>
        </div>
        <div
          className="slider__content"
          ref={element => {
            sliderContent = element;
          }}
        >
          <p
            className="slider__title"
            ref={element => {
              sliderTitle = element;
            }}
          >
            {sliderDescript[0]}
          </p>
          <h1
            className="slider__text"
            ref={element => {
              sliderText = element;
            }}
          >
            {sliderDescript[1]}
          </h1>
          <button
            className="slider__btn"
            ref={element => {
              sliderBtn = element;
            }}
          >
            kup teraz!
          </button>
        </div>
        <span
          className="fas fa-chevron-left slider__icon-left"
          onClick={() => {
            useCounter(--counter);
            if (counter === 0) useCounter((counter = 3));

            changeSlide(counter, handleWhichLine(counter));
          }}
        ></span>
        <span
          className="fas fa-chevron-right  slider__icon-right"
          onClick={() => {
            useCounter(++counter);

            if (counter === 4) useCounter((counter = 1));

            changeSlide(counter, handleWhichLine(counter));
          }}
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
