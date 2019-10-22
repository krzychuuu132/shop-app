import React from "react";
import "../sass/shop-page__style/mainSide.scss";
import { Link } from "react-router-dom";
import ShopOptions from "./menu/ShopOptions";
import Navigation from "./menu/Navigation";
import Main from "./main/Main";
import Footer from "./main/Footer";
// Search-Panel,Products

import SearchProducts from "./main/SearchProducts";

const mainSide = () => {
  const sexChoice = [
    {
      id: 0,
      type: "odzież żeńska",
      path: "/mainSide/girls",
      class: "search__name"
    },
    {
      id: 1,
      type: "odzież męska",
      path: "/mainSide/mens",
      class: "search__name"
    },
    {
      id: 2,
      type: "odzież dziecięca",
      path: "/mainSide/kids",
      class: "search__name"
    }
  ];
  return (
    <>
      <header className="header">
        <Navigation />
        <div className="components">
          <div className="components__menu-type">
            <Link to="/mainSide/girls" className="components__menu-type__link">
              Kobiety
            </Link>
            <Link to="/mainSide/mens" className="components__menu-type__link">
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
              <span className="fas fa-search components__search-btn__icon"></span>
            </button>
          </div>
          <ShopOptions />
        </div>
      </header>
      <main className="main">
        <Main />
        <SearchProducts sexChoice={sexChoice} />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default mainSide;
