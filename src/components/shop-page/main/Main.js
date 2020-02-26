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
          <img
            className="slider-img"
            src="/img/product_offer3.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>polo slim</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="/img/product_offer2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Cap</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="/img/product_offer.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>T-shirt regular</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Main;
