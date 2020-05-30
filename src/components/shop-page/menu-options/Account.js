import React, { useEffect, useState } from "react";
import axios from "axios"
import "../../sass/menu-options/Account.scss";

const Accout = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const { email } = localStorage;
   
     axios.post("/account",{email:JSON.parse(email)})
    .then(res=>setUserData(res.data))
    .catch(err=>{
      throw err
    })
    
  },[]);

  const { name,surname,email,date } = userData;
  
 
  const getLocalDate = () =>{
    const newDate = new Date(date);

    return newDate.toLocaleString();
  }

  return (
    <div className="account">
      <h1 className="account__title">informacje o koncie</h1>

      <div className="account__info">
        <ul className="account__info-list">
          <li className="account__info-list_element">imię: <span className="account__info-list_text">{name}</span></li>
          <li className="account__info-list_element">nazwisko: <span className="account__info-list_text">{surname}</span></li>
          <li className="account__info-list_element">e-mail: <span className="account__info-list_text">{email}</span></li>
          <li className="account__info-list_element">hasło: <span className="account__info-list_text">****************</span></li>
          <li className="account__info-list_element">data utworzenia konta: <span className="account__info-list_text">{getLocalDate()}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Accout;
