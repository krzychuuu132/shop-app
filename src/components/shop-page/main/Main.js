import React from "react";
import "../../sass/main/main.scss";

import slider__womansSmall from "../../sass/img/woman-source.jpg";
import slider__mansSmall from "../../sass/img/slider__mans-big.jpg";
import slider__kidsSmall from "../../sass/img/kids-source.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.sliderFirstImage = React.createRef();
    this.sliderMainContainer = React.createRef();
    this.prevBtn = React.createRef();
    this.nextBtn = React.createRef();
  }
  state = {};
  render() {
    // Counter

    let counter = 1;

    const size = this.sliderFirstImage.clientWidth;
    //console.log(size);
    return (
      <>
        <div className="slider" ref={this.sliderMainContainer}>
          <div className="slider__pictures">
            <img
              src={slider__kidsSmall}
              className="slider__lastClone slider__picture"
              ref={this.sliderFirstImage}
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
        <button className="prevBtn" ref={this.prevBtn}>
          Prev
        </button>
        <button className="nextBtn" ref={this.nextBtn}>
          Next
        </button>

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
  }
}

export default Main;

/* */
