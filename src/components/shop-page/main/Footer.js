import React from "react";
import "../../sass/main/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__elements">
        <p className="footer__elements-title">
          Chcesz jako pierwszy kupić produkt w cenie promocyjnej?
        </p>
        <h3 className="footer__elements-promotion">
          Witam w moim projekcie sklepu internetowego!
        </h3>
        <p className="footer__elements-text">
          Znajdziesz tutaj stylowe damskie i męskie ubrania.Gdy wybierzesz już
          swój wymarzony produkt,nie czaj się! Zamów go!
        </p>
      </div>
      <div className="footer__info">
        <p className="footer__info-text">
          Copyright 2020.Wszelkie prawa zastrzeżone.Strona korzysta z plików
          cookies zgodnie z polityką prywatności
        </p>
      </div>
    </>
  );
};

export default Footer;
