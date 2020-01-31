import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartSide from "./shop-page/account/StartSide";
import Register from "./shop-page/account/Register";
import Login from "./shop-page/account/Login";
import BadPatch from "./shop-page/account/BadPatch";
import ProductDetails from "./shop-page/main/ProductDetails";
//import ShopMenu from "./shop-page/MainSide";
import "./sass/account/style.scss";
import mainSide from "./shop-page/MainSide";
import WishList from "./shop-page/menu-options/WishList";
import ShoppingList from "./shop-page/menu-options/ShoppingList";
import Account from "./shop-page/menu-options/Account";
import { Provider } from "react-redux";
import store from "../redux/store";
import shopApp from "../redux/products/duck/reducer";
import Payment from "./shop-page/payment/Payment";
import Costs from "./shop-page/payment/Costs";
import Summary from "./shop-page/payment/Summary";
import OrderedProduct from "./shop-page/payment/OrderedProduct";
import { createStore } from "redux";
import { loadState, saveState } from "./shop-page/localStorage/localStorage";

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
            <Route path="/account" component={Account} />
            <Route path="/product" component={ProductDetails} />
            <Route path="/payment/adres" component={Payment} />
            <Route path="/payment/płatności" component={Costs} />
            <Route path="/payment/podsumowanie" component={Summary} />
            <Route path="/payment/gotowe" component={OrderedProduct} />
            "/payment/gotowe"
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
