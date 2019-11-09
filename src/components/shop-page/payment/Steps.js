import React from "react";
import { useHistory } from "react-router-dom";

const handleCorrectPath = (path, category) => {
  if (path === `/payment/${category}`) {
    return "buy-product__steps-info buy-product__steps-info--active";
  } else return "buy-product__steps-info";
};

const Steps = () => {
  const history = useHistory();
  return (
    <div className="buy-product__steps">
      <div className={handleCorrectPath(history.location.pathname, "adres")}>
        1
      </div>
      <div
        className={handleCorrectPath(history.location.pathname, "płatności")}
      >
        2
      </div>
      <div
        className={handleCorrectPath(history.location.pathname, "podsumowanie")}
      >
        3
      </div>
      <div className={handleCorrectPath(history.location.pathname, "ready")}>
        4
      </div>
    </div>
  );
};

export default Steps;
