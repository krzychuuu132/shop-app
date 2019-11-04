import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "../../sass/payment/payment.scss";
import Adres from "../payment/Adres";

const Payment = props => {
  const history = useHistory();
  const adresItem = useRef(null);
  //Adres
  //Metoda płatności
  //Podsumowanie
  //Gotowe
  if (history.location.pathname === "/shopping-list/adres") {
    adresItem.current.style.backgroundColor = "#ff6900";
    //dg
  }
  return (
    <div className="buy-product" onClick={() => console.log(history.location)}>
      <div className="buy-product__steps">
        <div className="buy-product__steps-info" ref={adresItem}>
          1
        </div>
        <div className="buy-product__steps-info">2</div>
        <div className="buy-product__steps-info">3</div>
        <div className="buy-product__steps-info">4</div>
      </div>
      <Adres />
    </div>
  );
};

export default Payment;
