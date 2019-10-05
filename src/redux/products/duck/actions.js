import types from "./types";

const add = name => ({ type: types.ADD_ACTOR, name });
const reset = () => ({ type: types.DELETE_ACTOR });
const searchProduct = () => ({ type: types.SHOW_PRODUCT, product });

export default {
  add,
  reset,
  searchProduct
};
