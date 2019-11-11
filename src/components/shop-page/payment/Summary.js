import React from "react";
import Steps from "../payment/Steps";
import "../../sass/payment/summary.scss";

const Summary = () => {
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
        </div>
      </div>
    </>
  );
};

export default Summary;
