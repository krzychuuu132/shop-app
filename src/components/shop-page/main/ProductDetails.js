import React, { useState, useRef } from "react";
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
const findTheSameProducts = product => ({
  type: "ADD_THE_SAME_PRODUCT",
  product
});
const ProductDetails = props => {
  const [addClass, useAddClass] = useState(false);
  const [selectSize, useSelectSize] = useState("");
  const history = useHistory();
  const selectSizeItems = useRef(null);
  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
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
          <select
            name="sizes"
            className="options__size"
            value={selectSize}
            onChange={e => useSelectSize(e.target.value)}
            ref={selectSizeItems}
          >
            <option value="Wybierz rozmiar">Wybierz rozmiar</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>

          <button
            className={
              addClass ? "options__btn options__btn--active" : "options__btn"
            }
            onClick={() => {
              if (!selectSize) {
                console.log("wybierz rozmiar!");
                selectSizeItems.current.className =
                  "options__size options__size--active";
              } else {
                selectSizeItems.current.className = "options__size";

                const copyProductDetails = productDetails.map(product => {
                  if (product) {
                    product.counter = 1;
                    product.size = selectSize;
                  }
                  return product;
                });

                const theSameProducts = buyShopProduct.filter(product => {
                  if (product.id === productDetails[0].id) return product;
                });

                if (theSameProducts && theSameProducts.length !== 0)
                  store.dispatch(findTheSameProducts(theSameProducts));
                else store.dispatch(addToList(copyProductDetails[0]));
              }

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
