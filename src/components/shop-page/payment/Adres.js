import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";

import "../../sass/payment/adres.scss";

const Adres = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addDataFromOrder = product => ({
    type: "PRODUCT_DATA",
    product
  });

  return (
    <div className="adres">
      <h1 className="adres__title">adres dostawy</h1>
      <div className="adres__location">
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

            store.dispatch(addDataFromOrder(user));
            history.push("/payment/płatności");
          }}
        >
          <input
            type="text"
            placeholder="imie"
            className="adres__location-form_data"
            name="imie"
          ></input>
          <input
            type="text"
            placeholder="adres "
            className="adres__location-form_data"
            name="adres"
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
        <p className="adres__data-phone_number">Numer telefonu komórkowego</p>
        <input
          type="text"
          placeholder="numer"
          className="adres__data-number"
        ></input>
      </div>
    </div>
  );
};

export default Adres;