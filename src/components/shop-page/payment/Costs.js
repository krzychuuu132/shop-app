import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/payment/costs.scss";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";
import Footer from "../main/Footer";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";

const infoAboutUser = userInfo => {
  const dispatch = useDispatch();
  console.log(userInfo);
  //const userData = userInfo.forEach(data => <p>{data}</p>);

  return (
    <>
      <p>imię i nazwisko: {userInfo[0].imie}</p>
      <p>adres: {userInfo[0].adres}</p>
      <p>kod pocztowy: {userInfo[0].kod}</p>
      <p>kraj: {userInfo[0].kraj}</p>
    </>
  );
};

const Costs = () => {
  const history = useHistory();
  // DATA
  const OrderData = useSelector(state => state.dataProductOrder.products);
  const OrderPrice = useSelector(state => state.orderPrice.products);

  const paymentMethod = (product, method) => ({
    type: "PAYMENT_METHOD",
    product,
    method
  });

  return (
    <>
      <div className="buy-costs">
        <ShopOptions />
        <Steps />
        <h1 className="buy-costs__title">Rodzaj płatności</h1>
        <div className="buy-costs__payment">
          <form
            className="buy-costs__payment-type"
            onChange={e =>
              store.dispatch(paymentMethod(OrderData[0], e.target.value))
            }
          >
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
                value="PayPal (gratis)"
              />
              PayPal (gratis)<span className="fab fa-cc-paypal"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
                value=" Szybki przelew (gratis)"
              />
              Szybki przelew (gratis)
              <span className="fab fa-amazon-pay"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
                value="Karta płatnicza (gratis)"
              />
              Karta płatnicza (gratis)<span className="fab fa-cc-visa"></span>
              <span className="fab fa-cc-mastercard"></span>
            </label>
            <label className="buy-costs__payment-method">
              <input
                type="radio"
                name="payment-method"
                className="buy-costs__payment-choice"
                value="Za pobraniem (gratis)"
              />
              Za pobraniem (gratis)
              <div className="buy-costs__payment-method_data">
                {infoAboutUser(OrderData)}
              </div>
            </label>
          </form>
        </div>

        <div className="buy-costs__summary">
          <p className="buy-costs__summary-transport">
            Przesyłka
            <span className="buy-costs__summary-transport_promotion">
              Gratis
            </span>
          </p>
          <p className="buy-costs__summary-price">
            łączna kwota
            <span className="buy-costs__summary-price_vat">(w tym VAT)</span>
            <span className="buy-costs__summary-price_value">
              {OrderPrice},00zł
            </span>
          </p>
          <button
            className="buy-costs__summary-btn"
            onClick={() => history.push("/payment/podsumowanie")}
          >
            Dalej
          </button>
          <p className="buy-costs__summary-text">
            Sprawdź zamówienie i potwierdź w ostatnim kroku
          </p>
        </div>
      </div>
      <footer className="footer">
        {" "}
        <Footer />
      </footer>
    </>
  );
};

export default Costs;
