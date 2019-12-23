import types from "./types";
import { INITIAL_PRODUCTS } from "./operations";

const buyProduct = {
  products: []
};
const orderProduct = {
  products: []
};
const ProductPrice = {
  products: []
};
const productsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      // console.log(state);
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case types.SORT_PRODUCT:
      return {
        products: state.products.sort((a, b) => b.price - a.price)
      };

    case types.SORT_PRODUCT_SMALLEST:
      return {
        products: state.products.sort((a, b) => a.price - b.price)
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
          //console.log(product.product);
          if (
            product.product.name === action.product &&
            product.product.categories[0].name === action.sex
          ) {
            return product;
          }
        })
      };
    //    product.sku === action.product && product.product.categories[0].name === action.sex
    case types.SHOW_MARK:
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (
            product.company.toLowerCase() === action.product.text.toLowerCase()
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
        products: INITIAL_PRODUCTS.products
      };
    case types.SHOW_PRODUCT_PRICE:
      return {
        products: INITIAL_PRODUCTS.products.filter(
          product => action.price > product.price
        )
      };
    case types.SEARCH_PRODUCT:
      return {
        products: INITIAL_PRODUCTS.products.filter(product =>
          product.company.toLowerCase().includes(action.search.toLowerCase())
        )
      };
    default:
      return state;
  }
};

const productsDeatilsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.SHOW_PRODUCT_DETAILS:
      console.log(state, action.productID);
      return {
        ...state,
        products: INITIAL_PRODUCTS.products.filter(
          product => product.product.id === action.productID
        )
      };
    case types.ADD_PRODUCT_TO_FAVOURITE:
      return {
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (product === action.product) {
            product.favourite = !product.favourite;
            return product;
          }
        })
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
        products: state.products.filter(product => {
          if (product.id === action.product[0].id) {
            product.counter++;

            return product;
          }
        })
      };
    case types.CLEAR_SHOP:
      return {
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
        products: [action.product]
      };
    case types.PAYMENT_METHOD:
      console.log(state.products);
      return {
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
        products: action.price
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
  orderPrice
};
