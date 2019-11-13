import React, { useEffect, useState } from "react";
import "../../sass/menu-options/Accout.scss";

const Accout = () => {
  const [getInfo, useGetInfo] = useState("");

  //useEffect(() => {
  //  fetch("/accout", { method: "GET" })
  //   .then(res => res.json())
  //   .then(data => useGetInfo(data.text));
  //});

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
