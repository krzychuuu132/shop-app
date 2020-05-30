import React, { useEffect, useState } from "react";
import "../sass/shop-page__style/mainSide.scss";
import { Route } from "react-router-dom";
import ShopOptions from "./menu/ShopOptions";
import Navigation from "./menu/Navigation";

import Footer from "./main/Footer";

import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../redux/products/duck/operations";

// Search-Panel,Products
import Anyone from "./main/Anyone";
import Girls from "./main/Girls";
import Mens from "./main/Mens";
import Kids from "./main/Kids";

const mainSide = () => {
  const products = useSelector(state => state.productsReducer.products);
  const [btn, setBtn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    products.length >= 50 ? null : dispatch(getAllProducts());
    window.addEventListener("scroll", GoToStart);
  }, []);

  const GoToStart = () => {
    if (window.scrollY > 1100) setBtn(true);
    else setBtn(false);
  };

  return (
    <>
      <header className="header">
        <div className="components">
          <div className="components__language">
            <select className="components__language-choice">
              <option className="components__language-option">EN</option>
              <option className="components__language-option">PL</option>
            </select>
            <select className="components__language-choice">
              <option className="components__language-option">USD</option>
              <option className="components__language-option">PLN</option>
            </select>
          </div>
          <ShopOptions />
        </div>
        <Navigation />
      </header>
      <main className="main">
        <Route path="/mainSide/home" component={Anyone}></Route>
        <Route path="/mainSide/girls" component={Girls}></Route>
        <Route path="/mainSide/mens" component={Mens}></Route>
        <Route path="/mainSide/kids" component={Kids}></Route>
        {btn ? (
          <button className="main__btn" onClick={() => window.scrollTo(0, 0)}>
            <span className="fas fa-arrow-up main__btn-icon"></span>
          </button>
        ) : null}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default mainSide;
