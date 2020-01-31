import React from "react";
import { Link } from "react-router-dom";
import "../../sass/account/StartSide.scss";

const StartSide = () => {
  return (
    <>
      <div className="start-page">
        <div className="start-page__register">
          <h1 className="start-page__title">nowy użytkownik</h1>
          <p className="start-page__text">
            Nowy na sklepie? Stwórz użytkownika aby zacząć dzisiaj.
          </p>
          <button className="start-page__btn-register">
            <Link to="/register" className="start-page__link-register">
              Stwórz konto
            </Link>
          </button>
        </div>
        <div className="start-page__login">
          <h1 className="start-page__title">Zarejestrowany użytkownik</h1>
          <p className="start-page__text">
            Posiadasz już konto? Zaloguj się teraz.
          </p>
          <button className="start-page__btn-login">
            <Link to="/login" className="start-page__link-login">
              Zaloguj się
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default StartSide;
