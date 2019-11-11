import { combineReducers } from "redux";
import productsReducer from "./products/duck/index";
import productsDeatilsReducer from "./products/duck/index";
import buyProductsReducer from "./products/duck/index";
import dataProductOrder from "./products/duck/index";
import orderPrice from "./products/duck/index";

export default combineReducers(
  productsReducer,
  productsDeatilsReducer,
  buyProductsReducer,
  dataProductOrder,
  orderPrice
);
