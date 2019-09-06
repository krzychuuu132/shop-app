import React from "react";
import "./sass/accout/loginStyle.scss";
const Login = () => {
  return (
    <>
      <div className="login">
        <h1 className="login__title">log in here</h1>
        <form method="post" action="/login" className="login__form">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="login__form-data"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="login__form-data"
          />

          <input
            type="submit"
            value="zaloguj sie"
            className="login__form-submit"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
