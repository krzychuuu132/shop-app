import React from "react";
import "../../sass/payment/costs.scss";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";
import Footer from "../main/Footer";

const Costs = () => {
  return (
    <>
      <div className="buy-costs">
        <ShopOptions />
        <Steps />
        <h1 className="buy-costs__title">Rodzaj płatności</h1>
        <div className="buy-costs__payment">
          <form className="buy-costs__payment-type">
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
              />
              PayPal (gratis)<span className="fab fa-cc-paypal"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
              />
              Szybki przelew (gratis)
              <span className="fab fa-amazon-pay"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
              />
              Karta płatnicza (gratis)<span className="fab fa-cc-visa"></span>
              <span className="fab fa-cc-mastercard"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
              />
              Za pobraniem (gratis)
              <div className="buy-costs__payment-method_data"></div>
            </label>
          </form>
        </div>

        <div className="buy-costs__summary">
          <p>Przesyłka</p>
          <p>
            łączna kwota <span>108,00 zł</span>
          </p>
          <button>Dalej</button>
          <p>Sprawdź zamówienie i potwierdź w ostatnim kroku</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Costs;
