import React from "react";
import ShopOptions from "../menu/ShopOptions";
import "../../sass/payment/summary.scss";

const Summary = () => {
  return (
    <>
      <div className="shop-summary">
        <ShopOptions />
        <div className="shop-summary__info"></div>
      </div>
    </>
  );
};

export default Summary;
