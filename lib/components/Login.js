import React from "react";

const Login = () => {
  return (
    <>
      <h1>Zaloguj sie!!</h1>
      <form method="post" action="/login">
        <br />
        <br />
        <label>Login</label>
        <input type="email" name="email" />

        <br />
        <br />
        <label>write password</label>
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="zaloguj sie" />
      </form>
    </>
  );
};

export default Login;
