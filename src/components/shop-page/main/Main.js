import React from "react";

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
            alt="Second slide"
            style={{ transform: "rotate(-9deg)" }}
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
