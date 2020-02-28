import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";
import { TweenMax } from "gsap";

import "../../sass/payment/adres.scss";

const showBuyingProducts = products =>
  products.map((product, index) => (
    <div className="payment-sum__products-product" key={index}>
      <div className="payment-sum__products-product_picture">
        <img
          src={product.src}
          name="product-picture"
          className="payment-sum__products-product_picture-img"
        />
      </div>

      <div className="payment-sum__products-product_details">
        <p className="payment-sum__products-product_title">
          {product.type + " "} {product.brand + " "} {product.size}
        </p>
        <p className="payment-sum__products-product_counter">
          <span className="payment-sum__products-product_size">
            {product.counter} szt.
          </span>
          <span className="payment-sum__products-product_price">
            {product.price} ,00$
          </span>
        </p>
      </div>
    </div>
  ));

const handleSumMoney = products => {
  const sumMoney = [];
  let sumScore = products.forEach(product => {
    let price = product.price * product.counter;
    sumMoney.push(price);
  });
  const price = sumMoney.reduce((a, b) => a + b);
  return price;
};

const Adres = () => {
  const [dataError, useDataError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  let errorText = useRef(null);

  const [supply, setSupply] = useState("");
  const [pay, setPay] = useState("");

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  const supplyText = [
    { text: "Dostawa kurierem", price: "(bezpłatnie)" },
    { text: " Odbiór osobisty w salonie", price: "(bezpłatnie)" },
    { text: "Paczkomaty", price: "(bezpłatnie)" }
  ];

  const paymentText = [
    { text: "BLIK", price: "(bezpłatnie)" },
    { text: "Szybki przelew DotPay", price: "(bezpłatnie)" },
    { text: "Przy odbiorze", price: "(bezpłatnie)" },
    { text: "Karta płatnicza online", price: "(bezpłatnie)" }
  ];

  const supplyProducts = () =>
    supplyText.map((product, index) => (
      <label
        className="shopping-info__supply-form_label"
        key={index}
        onClick={e => {
          document
            .querySelectorAll(".shopping-info__supply-form_label")
            .forEach(label => (label.style.borderColor = ""));
          e.target.style.borderColor = "black";
        }}
      >
        <div className="shopping-info__supply-form_choice">
          <input
            type="radio"
            id="other"
            name="supply"
            value={product.text}
            className="shopping-info__supply-form_input"
            onChange={e => setSupply(e.target.value)}
          />
          <span className="shopping-info__supply-form_text">
            {" "}
            {product.text}
          </span>

          <span className="shopping-info__supply-form_price">
            {" "}
            {product.price}
          </span>
        </div>
        <span className="fas fa-shipping-fast shopping-info__supply-form_icon"></span>
      </label>
    ));

  const paymentProducts = () =>
    paymentText.map((product, index) => (
      <label
        className="shopping-info__supply-form_label"
        key={index}
        onClick={e => {
          document
            .querySelectorAll(".shopping-info__supply-form_label")
            .forEach(label => (label.style.borderColor = ""));
          e.target.style.borderColor = "black";
        }}
      >
        <div className="shopping-info__supply-form_choice">
          <input
            type="radio"
            id="other"
            name="payment"
            value={product.text}
            className="shopping-info__supply-form_input"
            onChange={e => setPay(e.target.value)}
          />

          <span className="shopping-info__supply-form_text">
            {" "}
            {product.text}
          </span>

          <span className="shopping-info__supply-form_price">
            {" "}
            {product.price}
          </span>
        </div>
        <span className="fas fa-shipping-fast shopping-info__supply-form_icon"></span>
      </label>
    ));

  const addDataFromOrder = product => ({
    type: "PRODUCT_DATA",
    product
  });

  const handleShowError = () => {};

  const handleSubmit = e => {
    const formData = new FormData(e.target);
    const user = {};

    e.preventDefault();

    for (let entry of formData.entries()) {
      user[entry[0]] = entry[1];
    }
    user.supply = supply;
    user.payment = pay;

    if (
      user.imie &&
      user.kraj &&
      user.kod &&
      user.adres &&
      user.supply &&
      user.payment !== ""
    ) {
      useDataError(false);
      store.dispatch(addDataFromOrder(user));
      history.push("/payment/podsumowanie");
    } else {
      useDataError(true);
      handleShowError();
    }
  };

  return (
    <>
      <div className="user-info">
        <h1 className="user-info__title">urban shop</h1>
        <Steps />
      </div>

      <div className="shopping-container">
        <div className="shopping-info">
          <div className="shopping-info__supply">
            <h1 className="shopping-info__supply-title">Dostawa i płatność </h1>

            <p className="shopping-info__supply-info">1. Sposób dostawy</p>

            <div className="shopping-info__supply-form">{supplyProducts()}</div>
          </div>
          <div className="shopping-info__supply">
            <p className="shopping-info__supply-info">2. Metoda płatności</p>
            <div className="shopping-info__supply-form">
              {paymentProducts()}
            </div>
          </div>
          <div className="shopping-info__data shopping-info__supply">
            <p className="shopping-info__supply-info">3. Dane odbiorcy</p>
            <form
              className="shopping-info__data-form"
              onSubmit={handleSubmit}
              id="my-form"
            >
              <input
                type="text"
                placeholder="imie"
                className="shopping-info__data-form_data"
                name="imie"
                min="3"
                max="10"
              ></input>
              <input
                type="text"
                placeholder="adres "
                className="shopping-info__data-form_data"
                name="adres"
                min="7"
                max="20"
              ></input>
              <input
                type="text"
                placeholder="Kod pocztowy - Miasto"
                className="shopping-info__data-form_data"
                name="kod"
              ></input>
              <input
                type="text"
                placeholder="Kraj"
                className="shopping-info__data-form_data"
                name="kraj"
              ></input>
            </form>
          </div>
        </div>

        <div className="payment-sum">
          <div className="payment-sum__products">
            {showBuyingProducts(buyShopProduct)}
          </div>
          <div className="payment-sum__promotion">
            Darmowa dostawa na wszystkie produkty!
          </div>
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
          <button className="payment-sum__next" type="submit" form="my-form">
            Przejdź do podsumowania
            <span className="fas fa-chevron-right payment-sum__next-icon"></span>
          </button>
          {dataError ? (
            <p className="adres__location-error">uzupełnij dane!</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Adres;
