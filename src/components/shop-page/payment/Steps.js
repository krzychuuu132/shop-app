import React from "react";
import { useHistory } from "react-router-dom";
import "../../sass/payment/steps.scss";

const handleCorrectPath = (path, category) => {
  if (path === `/payment/${category}`) {
    return "buy-product__steps-info buy-product__steps-info--active";
  } else return "buy-product__steps-info";
};

const Steps = () => {
  const history = useHistory();
  return (
    <div className="buy-product__steps">
      <div className={handleCorrectPath(history.location.pathname, "")}>
        <span>1</span>
        <p className="buy-product__steps-text">Koszyk</p>
      </div>

      <div className={handleCorrectPath(history.location.pathname, "adres")}>
        <span>2</span>
        <p className="buy-product__steps-text">Dostawa i płatność</p>
      </div>
      <div
        className={handleCorrectPath(history.location.pathname, "podsumowanie")}
      >
        <span>3</span>
        <p className="buy-product__steps-text">Podsumowanie</p>
      </div>
      <div className={handleCorrectPath(history.location.pathname, "gotowe")}>
        <span>4</span>
        <p className="buy-product__steps-text">Gotowe</p>
      </div>
    </div>
  );
};

export default Steps;
