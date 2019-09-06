import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./sass/accout/StartSide.scss";
const StartSide = () => {
  return (
    <>
      <div className="start-page">
        <Link to="/register" className="start-page__link">
          Nie masz konta?Zarejestruj sie!
        </Link>
        <Link to="/login" className="start-page__link">
          Zaloguj sie!
        </Link>
      </div>
    </>
  );
};

export default StartSide;
