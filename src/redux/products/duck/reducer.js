import types from "./types";
import { INITIAL_PRODUCTS } from "./operations";

// DATA
const buyProduct = {
  products: []
};
const orderProduct = {
  products: []
};
const ProductPrice = {
  products: []
};
const INITIAL_USER_DATA = "";

// REDUCERS
const productsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case types.SORT_PRODUCT:
      return {
        ...state,
        products: state.products.sort(
          (a, b) => b.product.price - a.product.price
        )
      };

    case types.SORT_PRODUCT_SMALLEST:
      return {
        ...state,
        products: state.products.sort(
          (a, b) => a.product.price - b.product.price
        )
      };
    case types.RESET_PRODUCTS:
      return {
        ...state,
        products: []
      };

    case types.SHOW_PRODUCT:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (
            product.product.name === action.product &&
            product.product.categories[0].name === action.sex
          ) {
            return product;
          }
        })
      };

    case types.SHOW_MARK:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (
            product.product.brand.toLowerCase() ===
            action.product.text.toLowerCase()
          ) {
            return product;
          }
        })
      };
    case types.RETURN_DEFAULT:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => product)
      };

    case types.RETURN_DEFAULT_SEX:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products
      };
    case types.SHOW_PRODUCT_PRICE:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product => action.price > product.product.price
        )
      };
    case types.SEARCH_PRODUCT:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product =>
          product.product.brand
            .toLowerCase()
            .includes(action.search.toLowerCase())
        )
      };

    default:
      return state;
  }
};

const productsDeatilsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_FAVOURITE:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (product.product.id === action.product.product.id) {
            product.product.favourite = !product.product.favourite;

            return product;
          }
        })
      };
    case types.SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product => product.product.id === action.productID
        )
      };

    default:
      return state;
  }
};
const buyProductsReducer = (state = buyProduct, action) => {
  switch (action.type) {
    case types.ADD_TO_SHOP_LIST:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case types.ADD_THE_SAME_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product.id === action.product[0].id) {
            product.counter++;

            return product;
          }
          return product;
        })
      };
    case types.CLEAR_SHOP:
      return {
        ...state,
        products: []
      };
    case types.DELETE_FROM_SHOP_LIST:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product !== action.product) return product;
        })
      };
    case types.UPDATE_COUNTER:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product.id === action.product.id) {
            product.counter = action.value;
          }
          return product;
        })
      };
    default:
      return state;
  }
};

const dataProductOrder = (state = orderProduct, action) => {
  switch (action.type) {
    case types.PRODUCT_DATA:
      return {
        ...state,
        products: [action.product]
      };
    case types.PAYMENT_METHOD:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product.imie === action.product.imie) {
            product.method = action.method;
          }
          return product;
        })
      };
    default:
      return state;
  }
};

const orderPrice = (state = ProductPrice, action) => {
  switch (action.type) {
    case types.PRODUCT_DATA_PRICE:
      return {
        ...state,
        products: action.price
      };

    default:
      return state;
  }
};

const userData = (state = INITIAL_USER_DATA, action) => {
  switch (action.type) {
    case types.USER_DATA:
      const data = action.data;
      return {
        ...state,
        data
      };

    default:
      return state;
  }
};
export default {
  productsReducer,
  productsDeatilsReducer,
  buyProductsReducer,
  dataProductOrder,
  orderPrice,
  userData
};
