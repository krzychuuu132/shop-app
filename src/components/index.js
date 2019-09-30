import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartSide from "./shop-page/accout/StartSide";
import Register from "./shop-page/accout/Register";
import Login from "./shop-page/accout/Login";
import BadPatch from "./shop-page/accout/BadPatch";

//import ShopMenu from "./shop-page/MainSide";
import "./sass/accout/style.scss";
import mainSide from "./shop-page/MainSide";
import WishList from "./shop-page/menu-options/WishList";
import ShoppingList from "./shop-page/menu-options/ShoppingList";
import Accout from "./shop-page/menu-options/Accout";
import { Provider } from "react-redux";
import store from "../redux/store";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={StartSide} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/mainSide" component={mainSide} />
            <Route path="/wish-list" component={WishList} />
            <Route path="/shopping-list" component={ShoppingList} />
            <Route path="/accout" component={Accout} />
            <Route component={BadPatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
