import React, { useRef, useEffect, useState } from "react";
import { TweenMax } from "gsap";
import "../../sass/main/main.scss";
import Carousel from "react-bootstrap/Carousel";

const secondDivStyle = {
  marginTop: "160px",
  textAlign: "center",
  display: "flex",
  justifyContent: "Space-between"
};

const Main = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="slider">
            <h3 className="slider__title">First Slide</h3>{" "}
            <p className="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere eu augue ac gravida. Etiam enim velit, finibus nec aliquam
              id, porttitor vel metus. Cras lorem turpis, ornare a porttitor ut.
            </p>
            <div className="slider__element">
              <img
                src="/img/product_offer.png"
                className="rounded float-left slider__img"
                alt="..."
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider__second">
            <h3 className="slider__title">Second Slide</h3>{" "}
            <p className="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere eu augue ac gravida. Etiam enim velit, finibus nec aliquam
              id, porttitor vel metus. Cras lorem turpis, ornare a porttitor ut.
            </p>
            <div className="slider__element">
              <img
                src="/img/product_offer2.png"
                className="rounded float-left slider__img"
                alt="..."
                style={{ filter: "brightness(0.7)" }}
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slider__third"
            style={{
              background:
                "linear-gradient(to top left, #9966ff 14%, #ff99cc 72%);"
            }}
          >
            <h3 className="slider__title">Third slide</h3>{" "}
            <p className="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere eu augue ac gravida. Etiam enim velit, finibus nec aliquam
              id, porttitor vel metus. Cras lorem turpis, ornare a porttitor ut.
            </p>
            <div className="slider__element">
              <img
                src="/img/product_offer3.png"
                className="rounded float-left slider__img"
                alt="..."
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

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
          <h1 className="offer__product-title" style={secondDivStyle}>
            cap
            <span className="offer__product-price">$120</span>
          </h1>

          <div
            className="offer__product-picture"
            style={{
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
    </>
  );
};
export default Main;
