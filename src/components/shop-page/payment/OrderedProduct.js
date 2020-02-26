import React from "react";
import Steps from "../payment/Steps";
import "../../sass/payment/OrderedProduct.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";

const OrderedProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clearShop = () => ({
    type: "CLEAR_SHOP"
  });
  return (
    <>
      <div className="user-info">
        <h1 className="user-info__title">urban city</h1>
        <Steps />
      </div>
      <div className="ordered-product">
        <div className="ordered-product__ready">
          Dziękuję za zamówienie produktu w moim sklepie{" "}
          <span className="fas fa-clipboard-check ordered-product__ready-icon"></span>
          <button
            className="ordered-product__back"
            onClick={() => {
              store.dispatch(clearShop());
              history.push("/mainSide/home/All");
            }}
          >
            <span className="far fas fa-chevron-left ordered-product__back-icon"></span>
            Powrót do strony głównej
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderedProduct;
