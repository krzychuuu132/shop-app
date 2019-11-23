import types from "./types";

const INITIAL_PRODUCTS = {
  products: [
    {
      sex: "girls",
      type: "shoes",
      src: "https://picsum.photos/id/646/200/300",
      price: 110,
      company: "Adidas",
      novelty: true,
      popularity: true,
      sale: false,
      size: "M",
      id: 0,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "trousers",
      src: "https://picsum.photos/id/646/200/300",
      price: 90,
      company: "Puma",
      novelty: true,
      popularity: true,
      sale: false,
      size: "L",
      id: 1,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "t-shirt",
      src: "https://picsum.photos/id/646/200/300",
      price: 50,
      company: "Calvin Klein",
      novelty: false,
      popularity: false,
      sale: false,
      size: "S",
      id: 2,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "blouse",
      src: "https://picsum.photos/id/646/200/300",
      price: 190,
      company: "Lacoste",
      novelty: true,
      popularity: false,
      sale: false,
      size: "XS",
      id: 3,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "jacket",
      src: "https://picsum.photos/id/646/200/300",
      price: 220,
      company: "Adidas",
      novelty: false,
      popularity: false,
      sale: false,
      size: "XL",
      id: 4,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "shoes",
      src: "https://picsum.photos/id/646/200/300",
      price: 180,
      company: "Armani",
      novelty: true,
      popularity: false,
      sale: false,
      size: "M",
      id: 5,
      favourite: false,
      shopList: false
    },
    {
      sex: "girls",
      type: "trousers",
      src: "https://picsum.photos/id/646/200/300",
      price: 65,
      company: "Nike",
      novelty: true,
      popularity: false,
      sale: true,
      size: "L",
      id: 6,
      favourite: false,
      shopList: false
    },

    {
      sex: "mens",
      type: "trousers",
      src: "https://picsum.photos/id/338/200/300",
      price: 12,
      company: "Tommy Hilfiger",
      novelty: false,
      popularity: false,
      sale: false,
      size: "S",
      id: 7,
      favourite: false,
      shopList: false
    },
    {
      sex: "mens",
      type: "shoes",
      src: "https://picsum.photos/id/338/200/300",
      price: 67,
      company: "Adidas",
      novelty: true,
      popularity: true,
      sale: true,
      size: "XS",
      id: 8,
      favourite: false,
      shopList: false
    },
    {
      sex: "mens",
      type: "jacket",
      src: "https://picsum.photos/id/338/200/300",
      price: 98,
      company: "Nike",
      novelty: true,
      popularity: false,
      sale: true,
      size: "M",
      id: 9,
      favourite: false,
      shopList: false
    },
    {
      sex: "mens",
      type: "blouse",
      src: "https://picsum.photos/id/338/200/300",
      price: 44,
      company: "New Balance",
      novelty: false,
      popularity: false,
      sale: false,
      size: "L",
      id: 10,
      favourite: false,
      shopList: false
    },
    {
      sex: "mens",
      type: "t-shirt",
      src: "https://picsum.photos/id/338/200/300",
      price: 103,
      company: "Lacoste",
      novelty: false,
      popularity: false,
      sale: false,
      size: "S",
      id: 11,
      favourite: false,
      shopList: false
    },

    {
      sex: "kids",
      type: "shoes",
      src: "https://picsum.photos/id/596/200/300",
      price: 108,
      company: "Adidas",
      novelty: true,
      popularity: false,
      sale: false,
      size: "XL",
      id: 12,
      favourite: false,
      shopList: false
    },
    {
      sex: "kids",
      type: "t-shirt",
      src: "https://picsum.photos/id/596/200/300",
      price: 228,
      company: "Armani",
      novelty: false,
      popularity: true,
      sale: false,
      size: "L",
      id: 13,
      favourite: false,
      shopList: false
    },
    {
      sex: "kids",
      type: "blouse",
      src: "https://picsum.photos/id/596/200/300",
      price: 201,
      company: "New Balance",
      novelty: false,
      popularity: true,
      sale: false,
      size: "XL",
      id: 14,
      favourite: false,
      shopList: false
    },
    {
      sex: "kids",
      type: "jacket",
      src: "https://picsum.photos/id/596/200/300",
      price: 106,
      company: "Lacoste",
      novelty: false,
      popularity: false,
      sale: false,
      size: "S",
      id: 15,
      favourite: false,
      shopList: false
    },
    {
      sex: "kids",
      type: "trousers",
      src: "https://picsum.photos/id/596/200/300",
      price: 125,
      company: "Nike",
      novelty: false,
      popularity: false,
      sale: false,
      size: "S",
      id: 16,
      favourite: false,
      shopList: false
    },
    {
      sex: "kids",
      type: "shoes",
      src: "https://picsum.photos/id/596/200/300",
      price: 105,
      company: "Adidas",
      novelty: false,
      popularity: false,
      sale: false,
      size: "M",
      id: 17,
      favourite: false,
      shopList: false
    },

    {
      sex: "kids",
      type: "blouse",
      src: "https://picsum.photos/id/596/200/300",
      price: 99,
      company: "Puma",
      novelty: false,
      popularity: true,
      sale: true,
      size: "M",
      id: 18,
      favourite: false,
      shopList: false
    }
  ]
};
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
    case types.SORT_PRODUCT:
      return {
        products: state.products.sort((a, b) => b.price - a.price)
      };

    case types.SORT_PRODUCT_SMALLEST:
      return {
        products: state.products.sort((a, b) => a.price - b.price)
      };

    case types.SHOW_PRODUCT:
      return {
        products: INITIAL_PRODUCTS.products.filter(product => {
          if (product.type === action.product && product.sex === action.sex) {
            return product;
          }
        })
      };
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
      return {
        products: INITIAL_PRODUCTS.products.filter(
          product => product.id === action.productID
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
