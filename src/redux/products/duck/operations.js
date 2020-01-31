import actions from "./actions";

const INITIAL_PRODUCTS = { products: [] };

const fetchProducts = async () => {
  const response = await fetch(
    "https://randomapi.com/api/3h7k0ior?key=5I2X-L570-JLRT-6CMV",
    { method: "GET" }
  );
  const json = await response.json();

  return json;
};
const getAllProducts = () => async dispatch => {
  const data = await fetchProducts();

  data.results[0].map((product, index) => {
    dispatch(actions.add(product));
  });
  INITIAL_PRODUCTS.products = data.results[0];
};
export { getAllProducts, INITIAL_PRODUCTS };
