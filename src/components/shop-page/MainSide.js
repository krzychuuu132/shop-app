import React from "react";
import "../sass/shop-page__style/mainSide.scss";
import { Link } from "react-router-dom";
import ShopOptions from "./menu/ShopOptions";
import Navigation from "./menu/Navigation";
const mainSide = () => {
  return (
    <>
      <header className="header">
        <Navigation />
        <div className="components">
          <div className="components__menu-type">
            <Link to="/mainSide/girls" className="components__menu-type__link">
              Kobiety
            </Link>
            <Link to="/mainSide/mans" className="components__menu-type__link">
              mężczyźni
            </Link>
            <Link to="/mainSide/kids" className="components__menu-type__link">
              dzieci
            </Link>
          </div>

          <div className="components__search">
            <input
              type="search"
              className="components__search-input"
              placeholder="wyszukaj"
            />
            <button className="components__search-btn">
              <i className="fas fa-search components__search-btn__icon"></i>
            </button>
          </div>
          <ShopOptions />
        </div>
      </header>
    </>
  );
};
export default mainSide;