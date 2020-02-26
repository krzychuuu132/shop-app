import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/shop-page__style/menu/ShopOptions.scss";

import { useSelector, useDispatch } from "react-redux";
import { handleSumMoney } from "../menu-options/ShoppingList";
const ShopOptions = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const favouriteProducts = useSelector(state =>
    state.productsReducer.products.filter(product => product.favourite)
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );
  const favouriteProductsLength = favouriteProducts.length;
  const buyShopProductLength = buyShopProduct.length;

  let fontColor = false;
  if (window.location.pathname.includes("mainSide")) fontColor = true;
  else fontColor = false;
  const searchProduct = search => ({
    type: "SEARCH_PRODUCT",
    search
  });
  const handleSumMoney = products => {
    const sumMoney = [];
    let sumScore = products.forEach(product => {
      let price = product.price * product.counter;
      sumMoney.push(price);
    });
    const price = sumMoney.reduce((a, b) => a + b);
    return price;
  };
  return (
    <>
      <div
        className={
          search
            ? "input-group search-pannel search-pannel--active"
            : "input-group search-pannel"
        }
      >
        <input
          type="email"
          className="form-control"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Szukaj marki..."
        />

        <div class="input-group-append" id="btn">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(searchProduct(searchText))}
          >
            Wyszukaj
          </button>
        </div>
      </div>

      <div className="account-options">
        <Link to="/account" className="account-options__link">
          <span className="options-list">
            <i className="far fa-user options-account__icon"></i>
          </span>
          <span className="account-options__title">My profile</span>
        </Link>

        <Link to="/shopping-list" className="account-options__link">
          <span className="options-list">
            <i className="fas fa-shopping-cart options-shopping__icon"></i>
          </span>
          <span className="account-options__title">
            {buyShopProductLength} Items{" "}
            <span style={{ color: "lightgray" }}>
              {buyShopProductLength === 0
                ? "0,00$"
                : handleSumMoney(buyShopProduct) + ",00$"}
            </span>
          </span>
        </Link>
        <Link to="/wish-list" className="account-options__link">
          <span className="options-list">
            <i className="far fa-heart options-list__icon"></i>
          </span>
          <span className="account-options__title">Wishlist</span>
        </Link>
        {window.location.pathname === "/mainSide/home/All" ? (
          <div className="search-panel">
            <button
              className="search-panel__btn"
              onClick={() => setSearch(!search)}
            >
              <span className="fas fa-search"></span>
            </button>
          </div>
        ) : null}
      </div>
    </>
    //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  );
};
/**
    <form>
                        <h5>Newsletter</h5>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="your e-mail">

                            <div class="input-group-append" id="btn">
                                <button class="btn btn-primary">Sign in</button>
                            </div>
                        </div>

                    </form>
 */
export default ShopOptions;
