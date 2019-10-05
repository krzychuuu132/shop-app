import types from "./types";
import Product from "../../../components/shop-page/main/Product";

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
      sale: false
    },
    {
      sex: "girls",
      type: "trousers",
      src: "https://picsum.photos/id/646/200/300",
      price: 90,
      company: "Puma",
      novelty: true,
      popularity: true,
      sale: false
    },
    {
      sex: "girls",
      type: "t-shirt",
      src: "https://picsum.photos/id/646/200/300",
      price: 50,
      company: "Calvin Klein",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "girls",
      type: "blouse",
      src: "https://picsum.photos/id/646/200/300",
      price: 190,
      company: "Lacoste",
      novelty: true,
      popularity: false,
      sale: false
    },
    {
      sex: "girls",
      type: "jacket",
      src: "https://picsum.photos/id/646/200/300",
      price: 220,
      company: "Adidas",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "girls",
      type: "shoes",
      src: "https://picsum.photos/id/646/200/300",
      price: 180,
      company: "Armani",
      novelty: true,
      popularity: false,
      sale: false
    },
    {
      sex: "girls",
      type: "trousers",
      src: "https://picsum.photos/id/646/200/300",
      price: 65,
      company: "Nike",
      novelty: true,
      popularity: false,
      sale: true
    },

    {
      sex: "mens",
      type: "trousers",
      src: "https://picsum.photos/id/338/200/300",
      price: 12,
      company: "Tommy Hilfiger",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "mens",
      type: "shoes",
      src: "https://picsum.photos/id/338/200/300",
      price: 67,
      company: "Adidas",
      novelty: true,
      popularity: true,
      sale: true
    },
    {
      sex: "mens",
      type: "jacket",
      src: "https://picsum.photos/id/338/200/300",
      price: 98,
      company: "Nike",
      novelty: true,
      popularity: false,
      sale: true
    },
    {
      sex: "mens",
      type: "blouse",
      src: "https://picsum.photos/id/338/200/300",
      price: 44,
      company: "New Balance",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "mens",
      type: "t-shirt",
      src: "https://picsum.photos/id/338/200/300",
      price: 103,
      company: "Lacoste",
      novelty: false,
      popularity: false,
      sale: false
    },

    {
      sex: "kids",
      type: "shoes",
      src: "https://picsum.photos/id/596/200/300",
      price: 108,
      company: "Adidas",
      novelty: true,
      popularity: false,
      sale: false
    },
    {
      sex: "kids",
      type: "t-shirt",
      src: "https://picsum.photos/id/596/200/300",
      price: 228,
      company: "Armani",
      novelty: false,
      popularity: true,
      sale: false
    },
    {
      sex: "kids",
      type: "blouse",
      src: "https://picsum.photos/id/596/200/300",
      price: 201,
      company: "New Balance",
      novelty: false,
      popularity: true,
      sale: false
    },
    {
      sex: "kids",
      type: "jacket",
      src: "https://picsum.photos/id/596/200/300",
      price: 106,
      company: "Lacoste",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "kids",
      type: "trousers",
      src: "https://picsum.photos/id/596/200/300",
      price: 125,
      company: "Nike",
      novelty: false,
      popularity: false,
      sale: false
    },
    {
      sex: "kids",
      type: "shoes",
      src: "https://picsum.photos/id/596/200/300",
      price: 105,
      company: "Adidas",
      novelty: false,
      popularity: false,
      sale: false
    },

    {
      sex: "kids",
      type: "blouse",
      src: "https://picsum.photos/id/596/200/300",
      price: 99,
      company: "Puma",
      novelty: false,
      popularity: true,
      sale: true
    }
  ]
};

const copyProducts = INITIAL_PRODUCTS.products.map(products => products);

const productsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.SORT_PRODUCT:
      console.log(copyProducts);
      const copy = copyProducts.filter(product => {
        if (product.type === action.product) {
          return product;
        }
      });

      return {
        products: copy.sort((a, b) => b.price - a.price)
      };

    case types.SORT_PRODUCT_SMALLEST:
      return {
        products: copyProducts.sort((a, b) => a.price - b.price)
      };

    case types.SORT_NOVELTY:
      return {
        products: copyProducts.filter(product => {
          if (product.novelty) return product;
        })
      };

    case types.SORT_POPULARITY:
      return {
        products: copyProducts.filter(product => {
          if (product.popularity) return product;
        })
      };

    case types.SALE_PRODUCTS:
      return {
        products: copyProducts.filter(product => {
          if (product.sale) return product;
        })
      };

    case types.RETURN_DEFAULT:
      return {
        products: INITIAL_PRODUCTS.products
      };

    case types.SHOW_PRODUCT:
      return {
        products: copyProducts.filter(product => {
          if (product.type === action.product) {
            return product;
          }
        })
      };

    default:
      return state;
  }
};

export default productsReducer;
