import types from "./types";

const add = product => ({ type: types.ADD_PRODUCT, product });
const reset = () => ({ type: types.RESET_PRODUCTS });
const searchProduct = () => ({ type: types.SHOW_PRODUCT, product, sex });
const clearShop = () => ({
  type: types.CLEAR_SHOP
});
const SHOW_PRODUCT_DETAILS = productID => ({
  type: types.SHOW_PRODUCT_DETAILS,
  productID
});
const addToList = product => ({
  type: types.ADD_TO_SHOP_LIST,
  product
});
const findTheSameProducts = product => ({
  type: types.ADD_THE_SAME_PRODUCT,
  product
});
const showProduct = product => ({
  type: "ADD_PRODUCT_TO_FAVOURITE",
  product
});
const showProductPrice = price => ({
  type: "SHOW_PRODUCT_PRICE",
  price,
  category
});
const showProductSize = size => ({
  type: types.SHOW_SIZE,
  size,
  category
});
const showProductColor = color => ({
  type: "SHOW_COLOR",
  color,
  category
});
const searchProducts = search => ({
  type: types.SEARCH_PRODUCT,
  search
});
export default {
  add,
  reset,
  searchProduct,
  clearShop,
  SHOW_PRODUCT_DETAILS,
  addToList,
  findTheSameProducts,
  showProduct,
  showProductPrice,
  showProductSize,
  showProductColor,
  searchProducts
};
