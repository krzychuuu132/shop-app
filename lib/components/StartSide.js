import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
const StartSide = () => {
  return (
    <>
      <Link to="/register">Nie masz konta?Zarejestruj sie!</Link>
      <Link to="/login">Zaloguj sie!</Link>
      <h1>Strona glowna!!</h1>
    </>
  );
};

export default StartSide;
