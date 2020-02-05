import React from "react";
import { Link } from "react-router-dom";
import "../../sass/shop-page__style/menu/ShopOptions.scss";

import { useSelector } from "react-redux";
const ShopOptions = () => {
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
  return (
    <>
      <div className="account-options">
        <Link
          to="/account"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-list">
            <i className="far fa-user options-account__icon"></i>
          </span>
          <span className="account-options__title">My profile</span>
        </Link>

        <Link
          to="/shopping-list"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-list">
            <i className="fas fa-shopping-cart options-shopping__icon"></i>
          </span>
          <span className="account-options__title">
            {buyShopProductLength} Items{" "}
            <span style={{ color: "lightgray" }}>$0.00</span>
          </span>
        </Link>
        <Link
          to="/wish-list"
          className="account-options__link"
          style={fontColor ? { color: "white" } : { color: "black" }}
        >
          <span className="options-list">
            <i className="far fa-heart options-list__icon"></i>
          </span>
          <span className="account-options__title">Wishlist</span>
        </Link>
      </div>
    </>
    //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  );
};

export default ShopOptions;
