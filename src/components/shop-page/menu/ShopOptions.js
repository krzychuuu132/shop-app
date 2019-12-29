import React from "react";
import { Link } from "react-router-dom";
import "../../sass/shop-page__style/menu/ShopOptions.scss";

import { useSelector } from "react-redux";
const ShopOptions = () => {
  const favouriteProducts = useSelector(state =>
    state.productsReducer.products.filter(product => product.product.favourite)
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );
  const favouriteProductsLength = favouriteProducts.length;
  const buyShopProductLength = buyShopProduct.length;

  let fontColor = false;
  if (window.location.pathname.includes("mainSide")) fontColor = true;
  else fontColor = false;
  return (
    <>
      <div className="account-options">
        <Link
          to="/wish-list"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-list">
            <i className="far fa-heart options-list__icon"></i>

            <div className="options-list__counter">
              {favouriteProductsLength}
            </div>
          </span>
        </Link>

        <div className="account-options--active-list">1</div>

        <Link
          to="/shopping-list"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-list">
            <i className="fas fa-shopping-cart options-shopping__icon"></i>

            <div className="options-list__counter">{buyShopProductLength}</div>
          </span>
        </Link>

        <div className="account-options--active-shopping">12</div>

        <Link
          to="/account"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-account">
            <i className="fas fa-user options-account__icon"></i>
          </span>
        </Link>

        <div className="account-options--active-account"></div>
      </div>
    </>
    //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  );
};

export default ShopOptions;
