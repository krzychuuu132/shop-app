import React from "react";
import "../../sass/main/productFavourite.scss";
import { useSelector } from "react-redux";
import store from "../../../redux/store";

const ProductFavourite = props => {
  const productDetails = useSelector(state => state.productsDeatilsReducer);

  return (
    <div
      className={
        props.product.product.favourite
          ? "product-favourite product-favourite--active"
          : "product-favourite"
      }
      onClick={() => {
        const showProduct = product => ({
          type: "ADD_PRODUCT_TO_FAVOURITE",
          product
        });

        store.dispatch(showProduct(props.product));
      }}
      key={props.product.id}
    >
      <span className="far fa-heart product-details__img-icon"></span>
    </div>
  );
};

export default ProductFavourite;
