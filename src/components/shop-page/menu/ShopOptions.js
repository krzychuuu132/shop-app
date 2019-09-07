import React from "react";
import { Link } from "react-router-dom";
import "../../sass/shop-page__style/menu/ShopOptions.scss";

const ShopOptions = () => {
  return (
    <>
      <div className="accout-options">
        <Link to="/wish-list" className="accout-options__link">
          <span className="options-list">
            <i className="far fa-heart options-list__icon"></i>
            <p className="options-list__title">lista życzeń </p>
          </span>
        </Link>

        <div className="accout-options--active-list">1</div>

        <Link to="/shopping-list" className="accout-options__link">
          <span className="options-shopping">
            <i className="fas fa-shopping-cart options-shopping__icon"></i>
            <p className="options-shopping__title">koszyk</p>
          </span>
        </Link>

        <div className="accout-options--active-shopping">12</div>

        <Link to="/accout" className="accout-options__link">
          <span className="options-accout">
            <i className="fas fa-user options-accout__icon"></i>
            <p className="options-accout__title">moje konto </p>
          </span>
        </Link>

        <div className="accout-options--active-accout"></div>
      </div>
    </>
  );
};

export default ShopOptions;
