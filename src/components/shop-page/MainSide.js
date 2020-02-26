import React, { useState, useEffect } from "react";
import "../sass/shop-page__style/mainSide.scss";
import { Link, Route } from "react-router-dom";
import ShopOptions from "./menu/ShopOptions";
import Navigation from "./menu/Navigation";
import Main from "./main/Main";
import Footer from "./main/Footer";
import store from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../redux/products/duck/operations";

// Search-Panel,Products

import SearchProducts from "./main/SearchProducts";
import Anyone from "./main/Anyone";
import Girls from "./main/Girls";
import Mens from "./main/Mens";
import Kids from "./main/Kids";

const mainSide = () => {
  const products = useSelector(state => state.productsReducer.products);
  //console.log(products)
  const dispatch = useDispatch();

  const searchProduct = search => ({
    type: "SEARCH_PRODUCT",
    search
  });

  useEffect(() => {
    products.length >= 50 ? null : dispatch(getAllProducts());
  }, []);

  const [search, useSearch] = useState(false);

  return (
    <>
      <header className="header">
        <div className="components">
          {/* SEARCH */}

          {/* <div className="search-panel">
            <div
              className={
                search
                  ? "search-panel__search search-panel__search--active"
                  : "search-panel__search"
              }
            >
              <input
                type="search"
                className="search-panel__search-input"
                placeholder="Wyszukaj Markę..."
                onChange={e => store.dispatch(searchProduct(e.target.value))}
              />
              <button
                onClick={() => useSearch(false)}
                className="search-panel__search-exit"
              >
                <span className="fas fa-times"></span>
              </button>
            </div>
          </div> */}
          {/*      <div className="components__menu-type">
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
          */}
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
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default mainSide;
