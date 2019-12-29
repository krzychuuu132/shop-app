import React, { useState, useEffect } from "react";
import "../sass/shop-page__style/mainSide.scss";
import { Link } from "react-router-dom";
import ShopOptions from "./menu/ShopOptions";
import Navigation from "./menu/Navigation";
import Main from "./main/Main";
import Footer from "./main/Footer";
import store from "../../redux/store";
import icon from "../sass/img/shop-logo.png";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../redux/products/duck/operations";

// Search-Panel,Products

import SearchProducts from "./main/SearchProducts";

const mainSide = () => {
  const products = useSelector(state => state.productsReducer.products);

  const dispatch = useDispatch();

  const searchProduct = search => ({
    type: "SEARCH_PRODUCT",
    search
  });

  useEffect(() => {
    products.length >= 50 ? null : dispatch(getAllProducts());
  }, []);

  const [search, useSearch] = useState(false);
  const sexChoice = [
    {
      id: 0,
      type: "dla niej",
      path: "/mainSide/girls",
      class: "search__name"
    },
    {
      id: 1,
      type: "dla niego",
      path: "/mainSide/mens",
      class: "search__name"
    },
    {
      id: 2,
      type: "dla dziecka",
      path: "/mainSide/kids",
      class: "search__name"
    }
  ];
  return (
    <>
      <header className="header">
        <Navigation />

        <div className="components">
          <div className="search-panel">
            <button
              className="search-panel__btn"
              onClick={() => useSearch(!search)}
            >
              <span className="fas fa-search"></span>
            </button>
          </div>
          <div className="search-panel">
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
          </div>

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
