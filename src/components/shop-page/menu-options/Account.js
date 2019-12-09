import React, { useEffect, useState } from "react";
import "../../sass/menu-options/Account.scss";

const Accout = () => {
  const [userData, useUserData] = useState({});
  //console.log(userData);
  useEffect(() => {
    fetch("/login")
      .then(res => res.json())
      .then(data => useUserData(data));
  });
  return (
    <div className="account">
      <h1 className="account__title">informacje o koncie</h1>

      <div className="account__info">
        <ul className="account__info-list">
          <li className="account__info-list_element">imię:</li>
          <li className="account__info-list_element">nazwisko:</li>
          <li className="account__info-list_element">e-mail:</li>
          <li className="account__info-list_element">hasło:</li>
          <li className="account__info-list_element">data utworzenia konta:</li>
        </ul>
      </div>
    </div>
  );
};

export default Accout;