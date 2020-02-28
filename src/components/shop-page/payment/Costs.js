import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/payment/costs.scss";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";
import Footer from "../main/Footer";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";

const handleSumMoney = products => {
  const sumMoney = [];
  let sumScore = products.forEach(product => {
    let price = product.price * product.counter;
    sumMoney.push(price);
  });
  const price = sumMoney.reduce((a, b) => a + b);
  return price;
};

const showSummaryProducts = products =>
  products.map((product, index) => (
    <div className="summary__products-product" key={index}>
      <div className="summary__products-product_category">
        <img
          src={product.src}
          alt="picture"
          className="summary__products-product_category-img"
        />
        <span className="summary__products-product_category-title">
          {product.type + " "}
          {product.brand + " "}
          {product.size}
        </span>
      </div>
      <div className="summary__products-product_price">
        <span className="summary__products-product_price-counter">
          {product.counter} szt.
        </span>
        <span className="summary__products-product_price-price">
          {product.price},00 $
        </span>
      </div>
    </div>
  ));

const infoAboutUser = userInfo => {
  return (
    <>
      <p className="summary__supply-data_text">
        imię i nazwisko: {userInfo[0].imie}
      </p>
      <p className="summary__supply-data_text">adres: {userInfo[0].adres}</p>
      <p className="summary__supply-data_text">
        kod pocztowy: {userInfo[0].kod}
      </p>
      <p className="summary__supply-data_text">kraj: {userInfo[0].kraj}</p>
    </>
  );
};

const Costs = () => {
  const history = useHistory();

  // DATA
  const OrderData = useSelector(state => state.dataProductOrder.products);

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  return (
    <>
      <div className="user-info">
        <h1 className="user-info__title">urban shop</h1>
        <Steps />
      </div>
      <div className="confirm-order">
        <div className="summary">
          <h1 className="summary__title">Podsumowanie</h1>
          <div className="summary__supply">
            <h3 className="summary__supply-title">Dostawa</h3>
            <div className="summary__supply-method">
              <span className="fas fa-shipping-fast summary__supply-method_icon"></span>
              <p className="summary__supply-method_text">
                {OrderData[0].supply}
              </p>
            </div>
            <div className="summary__supply-data">
              <span className="summary__supply-data_title">Dane odbiorcy:</span>
              {infoAboutUser(OrderData)}
            </div>
          </div>

          <div className="summary__payment ">
            <h3 className="summary__supply-title">Płatność</h3>
            <div className="summary__supply-method">
              <span className="fas fa-money-check-alt summary__supply-method_icon"></span>
              <p className="summary__supply-method_text">
                {OrderData[0].payment}
              </p>
            </div>
          </div>
          <div className="summary__store">
            <h3 className="summary__supply-title">Koszyk</h3>
            <div className="summary__products">
              {showSummaryProducts(buyShopProduct)}
            </div>
          </div>
        </div>
        <div className="confirm-payment">
          <div className="payment-sum__price">
            <p className="payment-sum__price-text">
              Wartość koszyka{" "}
              <span className="payment-sum__price-text_price">
                {" "}
                {handleSumMoney(buyShopProduct)},00 $
              </span>
            </p>
            <p className="payment-sum__price-text">
              Dostawa{" "}
              <span className="payment-sum__price-text_price">0,00 $</span>
            </p>
            <p className="payment-sum__price-text">
              płatność{" "}
              <span className="payment-sum__price-text_price">0.00 $</span>
            </p>
          </div>
          <div className="payment-sum__value">
            <span className="payment-sum__value-text">Do zapłaty</span>
            <span className="payment-sum__value-text">
              {handleSumMoney(buyShopProduct)},00 $
            </span>
          </div>
          <button
            className="payment-sum__next"
            onClick={() => history.push("/payment/gotowe")}
          >
            Kupuję i płacę
            <span className="fas fa-chevron-right payment-sum__next-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Costs;
