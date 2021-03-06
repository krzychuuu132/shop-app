import types from "./types";
import { INITIAL_PRODUCTS } from "./operations";
//console.log(INITIAL_PRODUCTS);

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
        products: state.products.sort((a, b) => b.price - a.price)
      };

    case types.SORT_PRODUCT_SMALLEST:
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price)
      };
    case types.SHOW_ALL_PRODUCTS:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.sort()
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
          if (product.type === action.product && product.sex === action.sex) {
            return product;
          } else if (product.type === action.product && action.sex === "") {
            return product;
          }
        })
      };

    case types.SHOW_MARK:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (
            product.brand.toLowerCase() === action.product.text.toLowerCase()
          ) {
            return product;
          }
        })
      };
    case types.SHOW_SIZE:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product =>
            product.size === action.size && product.type === action.category
        )
      };

    case types.SHOW_COLOR:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product =>
            product.color === action.color && product.type === action.category
        )
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
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (
            parseInt(product.price) < action.price &&
            product.type === action.category
          ) {
            return product;
          } else null;
        })
      };
    case types.SEARCH_PRODUCT:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product =>
          product.brand.toLowerCase().includes(action.search.toLowerCase())
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
          if (product.id === action.product.id) {
            product.favourite = !product.favourite;

            return product;
          }
        })
      };
    case types.SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product => product.id === action.productID
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
          console.log(action.product);
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
