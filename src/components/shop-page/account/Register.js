import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../sass/account/registerStyle.scss";
import "../../sass/account/createdUser.scss";

const Register = () => {

  const [dataInfo,setDataInfo] = useState({
    error: "",
    createdUser: "",
    type: ""
  })
  
 const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch("/register", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setDataInfo({
          error: data.text || data,
          createdUser: data.createdUser || null,
          type: data.type
        });
      });

  }

  if (dataInfo.createdUser) {
    return (
      <div className="createdUser">
        <p className="createdUser__title">{dataInfo.createdUser}</p>
        <Link to="/login" className="createdUser__link">
          Zaloguj sie! <span className="far fa-smile-beam"></span>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="user-info">
          <h1 className="user-info__title">urban shop</h1>
        </div>
        <div className="register">
          <div className="register__user">
            <h1 className="register__title login__title">register</h1>
            <span className="fas fa-user-plus register__user-icon"></span>
          </div>
          <form
            onSubmit={handleSubmit}
            action="/register"
            className="register__form"
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="
             Name"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {dataInfo.type === "name" ? dataInfo.error : ""}
            </p>

            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Surname"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {dataInfo.type === "surname" ? dataInfo.error : ""}
            </p>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="register__form-email register__form-data"
            />
            <p className="register__form-errorText">
              {dataInfo.type === "email" ? dataInfo.error : ""}
            </p>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {dataInfo.type === "password" ? dataInfo.error : ""}
            </p>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="Repeat Password"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {dataInfo.type === "repeatPassword" ? dataInfo.error : ""}
            </p>
            <button className="register__form-btn">register</button>
          </form>
        </div>
      </>
    )}
  
}


export default Register;
