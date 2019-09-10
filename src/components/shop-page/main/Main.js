import React from "react";
import "../../sass/main/main.scss";

import slider__womansSmall from "../../sass/img/woman-source.jpg";
import slider__mansSmall from "../../sass/img/slider__mans-big.jpg";
import slider__kidsSmall from "../../sass/img/kids-small.jpg";

class Main extends React.Component {
  constructor() {
    super();
    this.imagesContainerEl = React.createRef();
    this.img1El = React.createRef();
    this.img2El = React.createRef();
    this.img3El = React.createRef();
    this.img1ContainerEl = React.createRef();
    this.img2ContainerEl = React.createRef();
    //this.img3ContainerEl = React.createRef();
    this.deviderEl = React.createRef();
    this.handleEl = React.createRef();
    this.imagesContainerWidth;
    this.imagesContainerLeftOffset;

    this.state = {
      dragging: false
    };
  }

  initEvents = () => {
    this.handleMouseDown();
    this.handleMouseUp();
    this.handleMouseMove();
  };

  getOffset = clientX => {
    const offset = clientX - this.imagesContainerLeftOffset;

    if (offset < 0) return 0;
    else if (offset > this.imagesContainerWidth)
      return this.imagesContainerWidth;
    else return offset;
  };

  move = clientX => {
    const offset = this.getOffset(clientX);

    const percent = (offset / this.imagesContainerWidth) * 100;

    this.deviderEl.current.style.left = percent + "%";
    this.img2El.current.style.width = percent + "%";
  };

  handleMouseMove = e => {
    if (this.state.dragging) {
      this.move(e.clientX);
    }
  };

  handleMouseDown = () => {
    this.setState({
      dragging: true
    });
  };

  handleMouseUp = () => {
    this.setState({
      dragging: false
    });
  };

  addJustImagesSize = () => {
    this.imagesContainerLeftOffset = this.imagesContainerEl.current.offsetLeft;
    this.imagesContainerWidth = this.imagesContainerEl.current.offsetWidth;

    this.img1El.current.style.width = this.imagesContainerWidth + "px";
    this.img2El.current.style.width = this.imagesContainerWidth + "px";
    //this.img3El.current.style.width = this.imagesContainerWidth + "px";
  };

  componentDidMount = () => {
    window.addEventListener("DOMContentLoaded", () => {
      this.addJustImagesSize();
      this.initEvents();
    });
  };

  componentWillMount = () => {
    window.addEventListener("resize", this.addJustImagesSize);
    window.addEventListener("mousemove", this.handleMouseMove);
  };

  render() {
    return (
      <>
        <div className="slider">
          <div
            className="slider__images-container"
            ref={this.imagesContainerEl}
          >
            <div
              className="slider__image-container slider__image-container--first"
              ref={this.img1ContainerEl}
            >
              <img
                src={slider__womansSmall}
                alt="girls-picture"
                draggable="false"
                ref={this.img1El}
              />
            </div>

            <div
              className="slider__image-container slider__image-container--second"
              ref={this.img2ContainerEl}
            >
              <img
                src={slider__mansSmall}
                alt="man-picture"
                draggable="false"
                ref={this.img2El}
              />
            </div>

            <div className="slider__devider" ref={this.deviderEl}>
              <div
                className="slider__handle"
                ref={this.handleEl}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
              >
                <span className="fas fa-chevron-left"></span>
                <span className="fas fa-chevron-right"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;

/*<section className="quality">
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
      </section> */
