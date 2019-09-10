import React from "react";
import { Link } from "react-router-dom";
import "../../sass/accout/registerStyle.scss";
import "../../sass/accout/createdUser.scss";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      createdUser: "",
      type: ""
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
          createdUser: data.createdUser || null,
          type: data.type
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
          <h1 className="register__title">sign in here</h1>

          <form
            onSubmit={this.handleSubmit}
            action="/register"
            className="register__form"
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="
               Enter name"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {this.state.type === "name" ? this.state.error : ""}
            </p>

            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Enter surname"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {this.state.type === "surname" ? this.state.error : ""}
            </p>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              className="register__form-email register__form-data"
            />
            <p className="register__form-errorText">
              {this.state.type === "email" ? this.state.error : ""}
            </p>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {this.state.type === "password" ? this.state.error : ""}
            </p>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              className="register__form-data"
            />
            <p className="register__form-errorText">
              {this.state.type === "repeatPassword" ? this.state.error : ""}
            </p>
            <button className="register__form-btn">register</button>
          </form>
        </div>
      );
    }
  }
}

export default Register;
