import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/main/ProductDetails.scss";
import ShopOptions from "../menu/ShopOptions";
import ProductFavourite from "./ProductFavourite";
import Footer from "./Footer";
import store from "../../../redux/store";
const addToList = product => ({
  type: "ADD_TO_SHOP_LIST",
  product
});

const ProductDetails = props => {
  const [addClass, useAddClass] = useState(false);
  const history = useHistory();

  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products
  );

  return (
    <>
      <div className="product-wrapper">
        <ShopOptions />
        <button
          className="product-exit"
          onClick={() => {
            history.push(`/mainSide/${productDetails[0].sex}`);
          }}
        >
          <span className="fas fa-arrow-left product-favourite-icon"></span>
        </button>
        <div className="product-details">
          <img
            src={productDetails[0].src}
            alt="product-img"
            className="product-details__img"
          />

          <ProductFavourite product={productDetails[0]} />

          <p className="product-details__company">
            {productDetails[0].company}{" "}
            <span className="fas fa-angle-right"></span>
          </p>

          <h3 className="product-details__type">{productDetails[0].type}</h3>

          <p className="product-details__price">
            <span className="product-details__actual_price">
              {productDetails[0].price} zł
            </span>
            <span className="product-details__vat">w tym VAT</span>
          </p>
          <p className="product-details__promotion">30% taniej</p>
          <p className="product-details__color">Kolor: bordeaux</p>
        </div>
        <div className="options">
          <span className="options__type">Rozmiary europejsie</span>
          <select name="sizes" className="options__size">
            <option value="Wybierz rozmiar">Wybierz rozmiar</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
          </select>

          <button
            className={
              addClass ? "options__btn options__btn--active" : "options__btn"
            }
            onClick={() => {
              store.dispatch(addToList(productDetails[0]));
              useAddClass(!addClass);
            }}
          >
            <span className="options__btn-text">Dodaj do koszyka</span>
            <span className="fas fa-shopping-basket options__btn-icon"></span>
          </button>
          <div className="transport">
            <div className="transport__transport">
              <span className="fas fa-shipping-fast options__transport-icon"></span>
              <p className="transport__text">
                <span className="transport__text-important">
                  Przesyłka ekspresowa
                </span>
                35,00 zł dostępna
              </p>
            </div>
            <div className="transport__transport">
              <span className="fas fa-truck options__transport-icon"></span>
              <p className="transport__text">
                {" "}
                <span className="transport__text-important">
                  Przesyłka standardowa{" "}
                </span>
                gratis w ciągu 3-6 dni roboczych
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default ProductDetails;
