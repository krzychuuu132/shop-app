import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/main/ProductDetails.scss";
import ShopOptions from "../menu/ShopOptions";
import ProductFavourite from "./ProductFavourite";
import Footer from "./Footer";
import store from "../../../redux/store";
import { TweenMax } from "gsap";

const ProductDetails = () => {
  // STATE
  const [selectSize, useSelectSize] = useState("");

  // REF
  const selectSizeItems = useRef(null);
  let btnIcon = useRef(null);

  const history = useHistory();

  // REDUX STATE
  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );
  //console.log(productDetails[0]);
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

          <div className="product-details__container">
            <h3 className="product-details__type">{productDetails[0].sex}</h3>
            <p className="product-details__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et velit sed ipsum ullamcorper molestie a vel magna. Proin
              gravida, elit sit amet vehicula lacinia, quam turpis dapibus erat.
            </p>
            <p className="product-details__price">
              <span className="product-details__actual_price">
                {productDetails[0].price} zł
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
            {productDetails[0].type === "buty" ? (
              <>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </>
            ) : (
              <>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </>
            )}
          </select>

          <button
            className="options__btn"
            onClick={() => {
              if (!selectSize || selectSize === "Wybierz rozmiar") {
                selectSizeItems.current.className =
                  "options__size options__size--active";
              } else {
                selectSizeItems.current.className = "options__size";

                const newObject = Object.assign({}, productDetails[0]);
                newObject.counter = 1;
                newObject.size = selectSize;

                const theSameProducts = buyShopProduct.filter(product => {
                  if (product.id === newObject.id) return product;
                });

                if (theSameProducts && theSameProducts.length !== 0)
                  store.dispatch({
                    type: "ADD_THE_SAME_PRODUCT",
                    product: theSameProducts
                  });
                else
                  store.dispatch({
                    type: "ADD_TO_SHOP_LIST",
                    product: newObject
                  });

                TweenMax.fromTo(
                  btnIcon,
                  0.3,
                  { fontSize: 16 },
                  { fontSize: 20 }
                );
              }
            }}
          >
            <span className="options__btn-text">Dodaj do koszyka</span>
            <span
              className="fas fa-shopping-basket options__btn-icon"
              ref={element => (btnIcon = element)}
            ></span>
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
                <span className="transport__text-important">
                  Przesyłka standardowa
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
