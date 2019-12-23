import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/main/ProductDetails.scss";
import ShopOptions from "../menu/ShopOptions";
import ProductFavourite from "./ProductFavourite";
import Footer from "./Footer";
import store from "../../../redux/store";
import { TweenMax } from "gsap";

const addToList = product => ({
  type: "ADD_TO_SHOP_LIST",
  product
});
const findTheSameProducts = product => ({
  type: "ADD_THE_SAME_PRODUCT",
  product
});
const ProductDetails = () => {
  const history = useHistory();
  const selectSizeItems = useRef(null);
  let btnIcon = useRef(null);

  const [addClass, useAddClass] = useState(false);
  const [selectSize, useSelectSize] = useState("");

  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products[0]
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products.product
  );
  console.log(productDetails);

  return (
    <>
      <div className="product-wrapper">
        <ShopOptions />
        <button
          className="product-exit"
          onClick={() => {
            history.push(
              `/mainSide/${productDetails.product.categories[0].name}`
            );
          }}
        >
          <span className="fas fa-arrow-left product-favourite-icon"></span>
        </button>
        <div className="product-details">
          <img
            src={productDetails.product.images[0].url}
            alt="product-img"
            className="product-details__img"
          />

          <ProductFavourite product={productDetails.product} />

          <div className="product-details__container">
            <h3 className="product-details__type">
              {productDetails.product.name}
            </h3>
            <p className="product-details__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et velit sed ipsum ullamcorper molestie a vel magna. Proin
              gravida, elit sit amet vehicula lacinia, quam turpis dapibus erat.
            </p>
            <p className="product-details__price">
              <span className="product-details__actual_price">
                {productDetails.product.price} zł
              </span>
              <span className="product-details__vat">w tym VAT</span>
            </p>
            <p className="product-details__promotion">30% taniej</p>
          </div>
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
              if (!selectSize || selectSize === "Wybierz rozmiar") {
                console.log("wybierz rozmiar!");
                selectSizeItems.current.className =
                  "options__size options__size--active";
              } else {
                selectSizeItems.current.className = "options__size";
                console.log(productDetails.product.product);

                productDetails.product.product.counter = 1;
                productDetails.product.product.size = selectSize;

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
