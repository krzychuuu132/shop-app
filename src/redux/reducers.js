import { combineReducers } from "redux";
import productsReducer from "./products/duck/index";
import productsDeatilsReducer from "./products/duck/index";

export default combineReducers(productsReducer, productsDeatilsReducer);
