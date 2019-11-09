import React from "react";
import { useHistory } from "react-router-dom";
import "../../sass/payment/adres.scss";

const Adres = () => {
  const history = useHistory();
  let formData = [{}];
  return (
    <div className="adres">
      <h1 className="adres__title">adres dostawy</h1>
      <div className="adres__location">
        <form
          className="adres__location-form"
          onSubmit={e => {
            e.preventDefault();

            for (let i = 0; i < 4; i++) {
              formData[i] = e.target[i].value;
            }
          }}
        >
          <input
            type="text"
            placeholder="Imię i Nazwisko"
            className="adres__location-form_data"
            name="imie i nazwisko"
          ></input>
          <input
            type="text"
            placeholder="Adres Zamieszkania"
            className="adres__location-form_data"
            name="adres"
          ></input>
          <input
            type="text"
            placeholder="Kod pocztowy - Miasto"
            className="adres__location-form_data"
            name="kod pocztowy"
          ></input>
          <input
            type="text"
            placeholder="Kraj"
            className="adres__location-form_data"
            name="kraj"
          ></input>
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
        <button
          className="adres__btn"
          onClick={() => {
            console.log(formData);
            history.push("/payment/płatności");
          }}
        >
          przejdź dalej
        </button>
      </div>
    </div>
  );
};

export default Adres;
