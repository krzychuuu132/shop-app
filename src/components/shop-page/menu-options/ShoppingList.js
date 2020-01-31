import React, { useState } from "react";
import { useHistory, Route } from "react-router-dom";
import "../../sass/menu-options/Shopping.scss";
import { useSelector } from "react-redux";
import ShopOptions from "../menu/ShopOptions";
import store from "../../../redux/store";
import Payment from "../payment/Payment";

const handleSumMoney = sum => {
  let sumScore = sum.reduce((a, b) => a + b);
  const orderPrice = price => ({
    type: "PRODUCT_DATA_PRICE",
    price
  });
  store.dispatch(orderPrice(sumScore));

  return `${sumScore},00zł`;
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
    <div className="products__product" key={index}>
      <img src={product.src} className="products__img" />
      <div className="products__info">
        <span className="products__info-content">
          Marka:<b> {product.brand}</b>
        </span>
        <span className="products__info-content">
          Typ Produktu:<b>{product.type}</b>
        </span>
        <span className="products__info-content">
          Kolor: <b>Black</b>
        </span>
        <span className="products__info-content">
          Rozmiar: <b>{product.size}</b>
        </span>
        {console.log(product.counter)}
        <select
          name="sizes"
          className="products__quantity"
          onChange={e => store.dispatch(updateCounter(product, e.target.value))}
          value={product.counter}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="products__price">
          <span className="products__promotion">
            {product.counter * product.price + 30},00 zł
          </span>
          <span className="products__price-item">
            {handleMoneysToPay(product, sum)},00 zł
          </span>
          <div className="products__price-saved">
            oszczędzasz {savedMoney} zł
          </div>
        </div>
      </div>
      <div
        className={
          deleteProduct
            ? "products__delete products__delete--active"
            : "products__delete"
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
        <span className="far fa-trash-alt products__delete-icon"></span>
      </div>
    </div>
  ));
  return (
    <>
      <div className="shop-list">
        <ShopOptions />

        <div
          className="products"
          style={
            buyShopProduct.length === 0 ? { backgroundColor: "#e3e3e3" } : null
          }
        >
          {buyShopProduct.length !== 0 ? (
            <h2 className="products__length">
              Koszyk ({buyShopProduct.length} art.)
            </h2>
          ) : null}
          {buyShopProduct.length === 0 ? (
            <h1 className="products__no-things">
              Nie masz żadnych przedmiotów w swoim koszyku{" "}
              <span className="far fa-angry products__no-things-icon"></span>
            </h1>
          ) : (
            <>
              {productsToBuy}
              <div className="transport">
                <h1 className="transport__title">
                  Przewidywalna dostawa przesyłki
                </h1>
                <p className="transport__content">
                  Oczekuj swojej przesyłki w domu do <strong>2 dni</strong>{" "}
                  roboczych od nadania przesyłki
                </p>
              </div>

              <div className="payment-methods">
                <h2 className="payment-methods__title">U nas zapłacisz:</h2>
                <div className="payment-methods-icons">
                  <span className="fab fa-cc-mastercard"></span>
                  <span className="fab fa-cc-visa"></span>
                  <span className="fab fa-cc-paypal"></span>
                  <span className="fab fa-cc-apple-pay"></span>
                  <span className="fab fa-cc-discover"></span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {buyShopProduct.length !== 0 ? (
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
      ) : null}
    </>
  );
};

export default ShoppingList;
