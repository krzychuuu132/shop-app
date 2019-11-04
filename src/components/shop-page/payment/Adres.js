import React from "react";
import "../../sass/payment/adres.scss";

const Adres = () => {
  return (
    <div className="adres">
      <h1 className="adres__title">adres dostawy</h1>
      <div className="adres__location">
        <form className="adres__location-form">
          <input
            type="text"
            placeholder="Imię i Nazwisko"
            className="adres__location-form_data"
          ></input>
          <input
            type="text"
            placeholder="Adres Zamieszkania"
            className="adres__location-form_data"
          ></input>
          <input
            type="text"
            placeholder="Kod pocztowy - Miasto"
            className="adres__location-form_data"
          ></input>
          <input
            type="text"
            placeholder="Kraj"
            className="adres__location-form_data"
          ></input>
        </form>
      </div>

      <h1 className="adres__title">dane kontaktowe</h1>
      <div className="adres__data">
        Jeśli wybrałeś dostawę paczki u kuriera, gdy Twoje zamówienie będzie
        gotowe dostaniesz SMS z kodem PIN paczki DHL.
      </div>
      <div className="adres__data-phone">
        <p>Numer telefonu komórkowego</p>
        <input type="text" placeholder="numer" className=""></input>
      </div>
    </div>
  );
};

export default Adres;
