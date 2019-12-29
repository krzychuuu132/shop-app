import types from "./types";

const add = product => ({ type: types.ADD_PRODUCT, product });
const addUserData = data => ({ type: types.USER_DATA, data });

const reset = () => ({ type: types.RESET_PRODUCTS });

const searchProduct = () => ({ type: types.SHOW_PRODUCT, product, sex });
const clearShop = () => ({
  type: types.CLEAR_SHOP
});
export default {
  add,
  reset,
  searchProduct,
  clearShop
};
