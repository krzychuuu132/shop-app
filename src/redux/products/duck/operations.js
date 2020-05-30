import actions from "./actions";

const INITIAL_PRODUCTS = { products: [] };

const fetchProducts = async () => {
  const response = await fetch(
    "https://randomapi.com/api/it5mczgi?key=SSPJ-891M-XX1F-6F21",
    { method: "GET" }
  );
  const json = await response.json();

  return json;
};
const getAllProducts = () => async dispatch => {
  const data = await fetchProducts();
  console.log(data)
  data.results[0].map((product, index) => {
    dispatch(actions.add(product));
  });
  INITIAL_PRODUCTS.products = data.results[0];
};
export { getAllProducts, INITIAL_PRODUCTS };
