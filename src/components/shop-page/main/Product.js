import React from "react";
import "../../sass/main/Product.scss";
import { useSelector } from "react-redux";

const Product = props => {
  const products = useSelector(state => state);

  const showElements = (product, index) => {
    return (
      <div className="product" key={index}>
        <img alt="product-img" src={product.src} className="product__picture" />
        <h6 className="product__title">{product.title}</h6>
        <p className="product__price">{product.price},00 zł</p>
      </div>
    );
  };

  const showProduct = (type = props.type) => {
    const girls = products.girls;
    const mens = products.mens;
    const kids = products.kids;

    if (type === "girls")
      return girls.map((product, index) => showElements(product, index));
    else if (type === "kids")
      return kids.map((product, index) => showElements(product, index));
    else if (type === "mens")
      return mens.map((product, index) => showElements(product, index));
  };

  return <div className="product-container">{showProduct()}</div>;
};

export default Product;

/*  */
