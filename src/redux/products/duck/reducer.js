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
      size: "M"
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
      size: "L"
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
      size: "S"
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
      size: "XS"
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
      size: "XL"
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
      size: "M"
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
      size: "L"
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
      size: "S"
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
      size: "XS"
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
      size: "M"
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
      size: "L"
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
      size: "S"
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
      size: "XL"
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
      size: "L"
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
      size: "XL"
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
      size: "S"
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
      size: "S"
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
      size: "M"
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
      size: "M"
    }
  ]
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

    case types.RETURN_DEFAULT:
      return {
        products: state.products.sort((a, b) => a.type.localeCompare(b.type))
      };

    case types.RETURN_DEFAULT_SEX:
      return {
        products: INITIAL_PRODUCTS.products
      };
    case types.SHOW_PRODUCT_PRICE:
      console.log(action.price);
      return {
        products: INITIAL_PRODUCTS.products.filter(
          product => action.price > product.price
        )
      };
    default:
      return state;
  }
};

export default productsReducer;

/*
 case types.SHOW_PRODUCT_SIZE:
      return {
        products: INITIAL_PRODUCTS.products.filter(
          product => product.size === action.size
        )
      };
    case types.SORT_NOVELTY:
      return {
        products: state.products.filter(product => {
          if (product.novelty) return product;
        })
      };

    case types.SORT_POPULARITY:
      return {
        products: state.products.filter(product => {
          if (product.popularity) return product;
          else return state;
        })
      };

    case types.SALE_PRODUCTS:
      return {
        products: state.products.filter(product => {
          if (product.sale) return product;
        })
      };

    case types.RETURN_DEFAULT:
      return {
        products: INITIAL_PRODUCTS.products
      }; */
