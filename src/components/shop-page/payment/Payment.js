import React from "react";

import "../../sass/payment/payment.scss";
import Adres from "../payment/Adres";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";

const Payment = () => {
  //Adres
  //Metoda płatności
  //Podsumowanie
  //Gotowe

  return (
    <>
      <div className="buy-product" onClick={() => console.log(history)}>
        <ShopOptions />
        <Steps />
        <Adres />
      </div>
    </>
  );
};

export default Payment;
