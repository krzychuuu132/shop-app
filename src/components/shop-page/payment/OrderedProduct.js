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
    <div className="ordered-product">
      <div className="ordered-product__protect">
        <h2 className="ordered-product__protect-title"> Bezpieczne zakupy</h2>
      </div>
      <Steps />
      <div className="ordered-product__ready">
        Dziękuję za zamówienie produktu w moim sklepie{" "}
        <span className="far fa-smile-beam"></span>
        <span className="fas fa-clipboard-check ordered-product__ready-icon"></span>
      </div>

      <button
        className="ordered-product__go-main-side"
        onClick={() => {
          store.dispatch(clearShop());
          history.push("/mainSide/girls");
        }}
      >
        <span className="far fa-arrow-alt-circle-left ordered-product__go-back-icon"></span>
        Powrót do strony głównej
      </button>
    </div>
  );
};

export default OrderedProduct;
