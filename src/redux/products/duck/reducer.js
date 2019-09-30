import types from "./types";

const INITIAL_PRODUCTS = {
  girls: [
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 110,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 90,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 50,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 190,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 220,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 180,
      title: "Spodnie jeans"
    },
    {
      type: "girls",
      src: "https://picsum.photos/id/646/200/300",
      price: 65,
      title: "Spodnie jeans"
    }
  ],
  mens: [
    {
      type: "mens",
      src: "https://picsum.photos/id/338/200/300",
      price: 12,
      title: "Koszulka z krótkim rękawem"
    },
    {
      type: "mens",
      src: "https://picsum.photos/id/338/200/300",
      price: 67,
      title: "Koszulka z krótkim rękawem"
    },
    {
      type: "mens",
      src: "https://picsum.photos/id/338/200/300",
      price: 98,
      title: "Koszulka z krótkim rękawem"
    },
    {
      type: "mens",
      src: "https://picsum.photos/id/338/200/300",
      price: 44,
      title: "Koszulka z krótkim rękawem"
    },
    {
      type: "mens",
      src: "https://picsum.photos/id/338/200/300",
      price: 103,
      title: "Koszulka z krótkim rękawem"
    }
  ],
  kids: [
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 108,
      title: "Kurtka z kapturem"
    },
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 228,
      title: "Kurtka z kapturem"
    },
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 201,
      title: "Kurtka z kapturem"
    },
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 106,
      title: "Kurtka z kapturem"
    },
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 125,
      title: "Kurtka z kapturem"
    },
    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 105,
      title: "Kurtka z kapturem"
    },

    {
      type: "kids",
      src: "https://picsum.photos/id/596/200/300",
      price: 99,
      title: "Kurtka z kapturem"
    }
  ]
};

const productsReducer = (state = INITIAL_PRODUCTS, action) => {
  switch (action.type) {
    case types.SORT_PRODUCT:
      return {
        ...state,
        girls: state.girls.sort((a, b) => b.price - a.price)
      };
    case types.SORT_DEFAULT_PRODUCT:
      return state;

    case types.ADD_ACTOR:
      return {
        ...state,
        actors: [...state.actors, action.name]
      };
    default:
      return state;
  }
};

export default productsReducer;
