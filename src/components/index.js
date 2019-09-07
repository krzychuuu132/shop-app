import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartSide from "./StartSide";
import Register from "./Register";
import Login from "./Login";
import BadPatch from "./BadPatch";

//import ShopMenu from "./shop-page/MainSide";
import "./sass/accout/style.scss";
import mainSide from "./shop-page/MainSide";
import WishList from "./shop-page/WishList";
import ShoppingList from "./shop-page/ShoppingList";
import Accout from "./shop-page/Accout";
// REDUX
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore";

const store = configureStore();
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
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
