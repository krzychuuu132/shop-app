import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Steps from "../payment/Steps";
import "../../sass/payment/summary.scss";

const Summary = () => {
  const history = useHistory();

  const summaryInfo = useSelector(state => state.dataProductOrder.products[0]);
  const OrderPrice = useSelector(state => state.orderPrice.products);
  return (
    <>
      <div className="shop-summary">
        <div className="shop-summary__protect">
          <h2 className="shop-summary__protect-title"> Bezpieczne zakupy</h2>
        </div>
        <Steps />
        <div className="shop-summary__info">
          <h1 className="shop-summary__info-title">
            sprawdź i złóż zamówienie
          </h1>
          <h3 className="shop-summary__data-title">Dane zamawiającego:</h3>
          <p className="shop-summary__data">
            imię: <strong>{summaryInfo.imie}</strong>
          </p>
          <p className="shop-summary__data">
            adres: <strong>{summaryInfo.adres}</strong>
          </p>
          <p className="shop-summary__data">
            kod: <strong>{summaryInfo.kod}</strong>
          </p>
          <p className="shop-summary__data">
            kraj: <strong>{summaryInfo.kraj}</strong>
          </p>

          <h3 className="shop-summary__data-title">Metoda płatności:</h3>
          <p className="shop-summary__data-method">- {summaryInfo.method}</p>
          <h3 className="shop-summary__data-title">Koszty:</h3>
          <p className="shop-summary__data-price">
            Cena(z dostawą):{" "}
            <strong>{OrderPrice},00zł + darmowa przesyłka</strong>
          </p>
        </div>
        <button
          className="shop-summary__order-product_btn"
          onClick={() => history.push("/payment/gotowe")}
        >
          Kupuję i płacę
        </button>
      </div>
    </>
  );
};

export default Summary;
