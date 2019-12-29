import React, { useEffect, useState } from "react";
import "../../sass/accout/loginStyle.scss";
import store from "../../../redux/store";

const Login = () => {
  const [UserEmail, useUserEmail] = useState("");
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
            value={UserEmail}
            onChange={e => useUserEmail(e.target.value)}
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
            onClick={() =>
              localStorage.setItem(
                store.dispatch({ type: "USER_DATA", data: UserEmail }),
                "email"
              )
            }
          />
        </form>
      </div>
    </>
  );
};

export default Login;
