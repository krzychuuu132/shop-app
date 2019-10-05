import React from "react";
import "../../sass/main/Product.scss";
import { useSelector } from "react-redux";

const Product = props => {
  const products = useSelector(state => state.products);

  const showElements = products => {
    return products.map((product, index) => (
      <div className="product" key={index}>
        <img alt="product-img" src={product.src} className="product__picture" />
        <h6 className="product__title">{product.company}</h6>
        <p className="product__price">od {product.price},00 zł</p>
        <p>{product.type}</p>
      </div>
    ));
  };

  const showProduct = (type = props.type) => {
    const searchProducts = () => {
      const get = products.filter(product => {
        if (type === "girls" && product.sex === "girls") {
          return product;
        } else if (type === "kids" && product.sex === "kids") {
          return product;
        } else if (type === "mens" && product.sex === "mens") {
          return product;
        }
      });
      return get;
    };
    const getProducts = searchProducts();

    if (searchProducts) return showElements(getProducts);
  };

  return <div className="product-container">{showProduct()}</div>;
};

export default Product;

/*  */
