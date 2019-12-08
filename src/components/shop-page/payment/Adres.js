import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";
import ShopOptions from "../menu/ShopOptions";
import Steps from "./Steps";
import { TweenMax } from "gsap";

import "../../sass/payment/adres.scss";

const Adres = () => {
  const [dataError, useDataError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  let errorText = useRef(null);

  const addDataFromOrder = product => ({
    type: "PRODUCT_DATA",
    product
  });

  const handleShowError = () => {
    TweenMax.fromTo(
      errorText,
      0.3,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0 }
    );
  };
  return (
    <div className="adres">
      <ShopOptions />
      <Steps />
      <h1 className="adres__title">adres dostawy</h1>
      <div className="adres__location">
        <p
          className="adres__location-error"
          ref={element => (errorText = element)}
        >
          uzupełnij dane!
        </p>

        <form
          className="adres__location-form"
          onSubmit={e => {
            const formData = new FormData(e.target);
            const user = {};

            e.preventDefault();

            for (let entry of formData.entries()) {
              user[entry[0]] = entry[1];
            }
            console.log(user);
            if (user.imie && user.kraj && user.kod && user.adres !== "") {
              useDataError(false);
              store.dispatch(addDataFromOrder(user));
              history.push("/payment/płatności");
            } else {
              useDataError(true);
              handleShowError();
            }
          }}
        >
          <input
            type="text"
            placeholder="imie"
            className="adres__location-form_data"
            name="imie"
            min="3"
            max="10"
          ></input>
          <input
            type="text"
            placeholder="adres "
            className="adres__location-form_data"
            name="adres"
            min="7"
            max="20"
          ></input>
          <input
            type="text"
            placeholder="Kod pocztowy - Miasto"
            className="adres__location-form_data"
            name="kod"
          ></input>
          <input
            type="text"
            placeholder="Kraj"
            className="adres__location-form_data"
            name="kraj"
          ></input>
          <button className="adres__btn">przejdź dalej</button>
        </form>
      </div>

      <h1 className="adres__title">dane kontaktowe</h1>
      <div className="adres__data">
        Jeśli wybrałeś dostawę paczki u kuriera, gdy Twoje zamówienie będzie
        gotowe dostaniesz SMS z kodem PIN paczki DHL.
      </div>
      <div className="adres__data-phone">
        <p className="adres__data-phone_number">
          Numer telefonu komórkowego (opcjonalnie)
        </p>
        <input
          type="number"
          placeholder="numer"
          className="adres__data-number"
        ></input>
      </div>
    </div>
  );
};

export default Adres;
