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

  return (
    <>
      <div className="accout-options">
        <Link to="/wish-list" className="accout-options__link">
          <span className="options-list">
            <i className="far fa-heart options-list__icon"></i>

            <div className="options-list__counter">
              {favouriteProductsLength}
            </div>
          </span>
        </Link>

        <div className="accout-options--active-list">1</div>

        <Link to="/shopping-list" className="accout-options__link">
          <span className="options-list">
            <i className="fas fa-shopping-cart options-shopping__icon"></i>

            <div className="options-list__counter">{buyShopProductLength}</div>
          </span>
        </Link>

        <div className="accout-options--active-shopping">12</div>

        <Link to="/accout" className="accout-options__link">
          <span className="options-accout">
            <i className="fas fa-user options-accout__icon"></i>
          </span>
        </Link>

        <div className="accout-options--active-accout"></div>
      </div>
    </>
    //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  );
};

export default ShopOptions;
