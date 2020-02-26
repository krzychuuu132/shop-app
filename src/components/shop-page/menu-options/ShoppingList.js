import React, { useState } from "react";
import { useHistory, Route, Link } from "react-router-dom";
import "../../sass/menu-options/Shopping.scss";
import { useSelector } from "react-redux";
import ShopOptions from "../menu/ShopOptions";
import store from "../../../redux/store";

const handleSumMoney = sum => {
  let sumScore = sum.reduce((a, b) => a + b);
  const orderPrice = price => ({
    type: "PRODUCT_DATA_PRICE",
    price
  });
  store.dispatch(orderPrice(sumScore));

  return `${sumScore}`;
};

const handleMoneysToPay = (product, sum) => {
  const sumMoney = product.counter * product.price;
  sum.push(sumMoney);

  return sumMoney;
};

const ShoppingList = () => {
  const history = useHistory();

  // SUM OF MONEY
  const sum = [];

  const updateCounter = (product, value) => ({
    type: "UPDATE_COUNTER",
    product,
    value
  });

  const [deleteProduct, useDeleteProduct] = useState(false);

  const [nextStep, useNextStep] = useState(false);
  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  const savedMoney = 30;

  const productsToBuy = buyShopProduct.map((product, index) => (
    <div className="products-shopping__product" key={index}>
      <div className="products-shopping__product-picture">
        <img src={product.src} className="products-shopping__product-img" />
        <p className="products-shopping__product-title">
          {product.type + " "}
          {product.brand}
        </p>
      </div>

      <div className="products-shopping__product-price">
        <p className="products-shopping__product-price_promotion">
          {product.counter * product.price + 100},00$
        </p>
        <p className="products-shopping__product-price_value">
          {product.counter * product.price},00$
        </p>
        <p className="products-shopping__product-price_saved">
          Oszczędzasz: 100,00$
        </p>
      </div>

      <div className="products-shopping__product-length">
        <button
          className="products-shopping__product-length_sign"
          onClick={() => {
            let number = product.counter;
            number <= 1 ? (number = 2) : null;

            store.dispatch(updateCounter(product, --number));
          }}
        >
          <span className="fas fa-minus"></span>
        </button>{" "}
        <input
          name="sizes"
          type="text"
          className="products-shopping__product-length_select input-rounded"
          value={product.counter}
          disabled
        />
        <button
          className="products-shopping__product-length_sign"
          onClick={() => {
            let number = product.counter;
            number >= 4 ? (number = 3) : null;

            store.dispatch(updateCounter(product, ++number));
          }}
        >
          <span className="fas fa-plus"></span>
        </button>
      </div>
      <p className="products-shopping__product-sum">
        {" "}
        {handleMoneysToPay(product, sum)},00 $
      </p>
      <div
        className={
          deleteProduct
            ? "products-shopping__product-delete products-shopping__product-delete--active"
            : "products-shopping__product-delete"
        }
        onClick={() => {
          const deleteFromProductList = product => ({
            type: "DELETE_FROM_SHOP_LIST",
            product
          });

          store.dispatch(deleteFromProductList(product));
          useDeleteProduct(!deleteProduct);
        }}
      >
        <span className="far fa-trash-alt products-shopping__product-delete_icon"></span>
      </div>
    </div>
  ));
  return (
    <>
      <div className="shop-list">
        <ShopOptions />
        {window.location.pathname === "/shopping-list/new_product" ? (
          <div className="shop-list__new-product">
            <span className="fas fa-clipboard-check shop-list__new-product_icon"></span>{" "}
            Produkt został dodany dla koszyka!
          </div>
        ) : null}
        {productsToBuy.length === 0 ? (
          <div className="pure-store">
            <h4 className="pure-store__title">Twój koszyk jest pusty</h4>
            <p className="pure-store__text">
              Przejdź do <Link to="/mainSide/home/All">strony głównej</Link> i
              wybierz coś dla siebie.
            </p>
          </div>
        ) : (
          <div className="products-shopping">
            <>
              <h3 className="products-shopping__title">Twój koszyk</h3>
              <div className="products-shopping__info">
                <p className="products-shopping__info-text">produkt</p>
                <p className="products-shopping__info-text">cena</p>
                <p className="products-shopping__info-text">ilość</p>
                <p className="products-shopping__info-text">razem</p>
              </div>
              <div className="products-shopping__products">{productsToBuy}</div>
              <div className="products-shopping__sum">
                <p className="products-shopping__sum-text">
                  Wartość zakupów: {handleSumMoney(sum)},00 $
                </p>
              </div>
              <div className="products-shopping__next">
                <button className="products-shopping__next-back">
                  <span className="fas fa-chevron-left products-shopping__next-back_icon"></span>{" "}
                  <Link
                    to="/mainSide/home/All"
                    className="products-shopping__next-back_link"
                  >
                    {" "}
                    Szukaj kolejnego produktu
                  </Link>
                </button>
                <button
                  className="products-shopping__next-step"
                  onClick={() => {
                    history.push("/payment/adres");
                  }}
                >
                  Przejdź do płatności
                  <span className="fas fa-chevron-right products-shopping__next-step_icon"></span>
                </button>
              </div>
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingList;

/*  {buyShopProduct.length === 0 ? (
            <h1 className="products-shopping__no-things">
              Nie masz żadnych przedmiotów w swoim koszyku{" "}
              <span className="far fa-angry products-shopping__no-things-icon"></span>
            </h1>
          ) : (
            <>
              <h3 className="products-shopping__store">Twój koszyk</h3>
              <div className="products-shopping__info"></div>
              <div className="products-shopping__product"></div>
            </>
          )} */

/*buyShopProduct.length !== 0 ? (
            <h2 className="products-shopping__length">
              Koszyk ({buyShopProduct.length} art.)
            </h2>
          ) : null*/

/* TRANSPORT - INFO */

/* <div className="transport">
                <h1 className="transport__title">
                  Przewidywalna dostawa przesyłki
                </h1>
                <p className="transport__content">
                  Oczekuj swojej przesyłki w domu do <strong>2 dni</strong>{" "}
                  roboczych od nadania przesyłki
                </p>
              </div>
              {/* METODY PŁATNOŚCI - INFO */

/* <div className="payment-methods">
                <h2 className="payment-methods__title">U nas zapłacisz:</h2>
                <div className="payment-methods-icons">
                  <span className="fab fa-cc-mastercard"></span>
                  <span className="fab fa-cc-visa"></span>
                  <span className="fab fa-cc-paypal"></span>
                  <span className="fab fa-cc-apple-pay"></span>
                  <span className="fab fa-cc-discover"></span>
                </div>
          </div>*/

/*buyShopProduct.length !== 0 ? (
        <div className="fees">
          <div className="fees__price">
            Łączna kwota (w tym VAT) + przesyłka GRATIS
            <span className="fees__price-item">{handleSumMoney(sum)}</span>
          </div>
          <button
            className="fees__next-step"
            onClick={() => {
              history.push("payment/adres");
              useNextStep(!nextStep);
            }}
          >
            przejdź do kasy
          </button>
        </div>
          ) : null*/

/*  {buyShopProduct.length === 0 ? (
            <h1 className="products-shopping__no-things">
              Nie masz żadnych przedmiotów w swoim koszyku{" "}
              <span className="far fa-angry products-shopping__no-things-icon"></span>
            </h1>
          ) : (
            <>
              <h3 className="products-shopping__store">Twój koszyk</h3>
              <div className="products-shopping__info"></div>
              <div className="products-shopping__product"></div>
            </>
          )} */

/*buyShopProduct.length !== 0 ? (
            <h2 className="products-shopping__length">
              Koszyk ({buyShopProduct.length} art.)
            </h2>
          ) : null*/

/* TRANSPORT - INFO */

/* <div className="transport">
                <h1 className="transport__title">
                  Przewidywalna dostawa przesyłki
                </h1>
                <p className="transport__content">
                  Oczekuj swojej przesyłki w domu do <strong>2 dni</strong>{" "}
                  roboczych od nadania przesyłki
                </p>
              </div>
              {/* METODY PŁATNOŚCI - INFO */

/* <div className="payment-methods">
                <h2 className="payment-methods__title">U nas zapłacisz:</h2>
                <div className="payment-methods-icons">
                  <span className="fab fa-cc-mastercard"></span>
                  <span className="fab fa-cc-visa"></span>
                  <span className="fab fa-cc-paypal"></span>
                  <span className="fab fa-cc-apple-pay"></span>
                  <span className="fab fa-cc-discover"></span>
                </div>
          </div>*/

/*buyShopProduct.length !== 0 ? (
        <div className="fees">
          <div className="fees__price">
            Łączna kwota (w tym VAT) + przesyłka GRATIS
            <span className="fees__price-item">{handleSumMoney(sum)}</span>
          </div>
          <button
            className="fees__next-step"
            onClick={() => {
              history.push("payment/adres");
              useNextStep(!nextStep);
            }}
          >
            przejdź do kasy
          </button>
        </div>
          ) : null*/
