import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      createdUser: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch("/register", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          error: data.text || data,
          createdUser: data.createdUser || null
        });
      });
  }

  render() {
    if (this.state.createdUser) {
      return (
        <div className="createdUser">
          <h1 className="createdUser__title">{this.state.createdUser}</h1>
          <Link to="/login" className="createdUser__link">
            Zaloguj sie!
          </Link>
        </div>
      );
    } else {
      return (
        <div className="register">
          <h1>{this.state.error}</h1>
          <h1 className="register__title">Utwórz nowe konto</h1>
          <p className="register__text">szybko i prosto.</p>
          <form
            onSubmit={this.handleSubmit}
            action="/register"
            className="register__form"
          >
            <input id="name" name="name" type="text" placeholder="imię" />

            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="nazwisko"
            />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              className="register__form-email"
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="hasło"
            />

            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="powtórz hasło"
            />

            <button className="register__form-btn">Zarejestruj się</button>
          </form>
        </div>
      );
    }
  }
}

export default Register;
