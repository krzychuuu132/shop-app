import actions from "./actions";

const INITIAL_PRODUCTS = { products: [] };

const fetchProducts = async () => {
  const response = await fetch(
    "https://api.jumpseller.com/v1/products.json?login=e4359e8c41eeff4e4cb93ccb51189862&authtoken=163e3f0824e704f0219b69df3dff0082",
    { method: "GET" }
  );
  const json = await response.json();

  return json;
};
const getAllProducts = () => async dispatch => {
  const products = await fetchProducts();

  products.map(product => dispatch(actions.add(product)));
  INITIAL_PRODUCTS.products = products;
};
export { getAllProducts, INITIAL_PRODUCTS };
