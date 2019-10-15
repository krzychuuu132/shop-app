import React, { useState } from "react";
import "../../sass/main/Product.scss";
import { useSelector } from "react-redux";
import { useHistory, Route } from "react-router-dom";
import store from "../../../redux/store";
import ProductDetails from "./ProductDetails";
const Product = props => {
  const [activeProduct, useActiveProduct] = useState(false);

  const products = useSelector(state => state.productsReducer.products);

  let history = useHistory();

  const handleProductClcik = id => {
    useActiveProduct(!activeProduct);
    // history.push(`/product-343343434_${id}`);

    const SHOW_PRODUCT_DETAILS = productID => ({
      type: "SHOW_PRODUCT_DETAILS",
      productID
    });
    store.dispatch(SHOW_PRODUCT_DETAILS(id));
  };
  console.log(activeProduct);
  const showElements = products => {
    return products.map((product, index) => (
      <div
        className="product"
        key={index}
        onClick={() => handleProductClcik(product.id)}
      >
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
  return activeProduct ? (
    <ProductDetails />
  ) : (
    <div className="product-container">{showProduct()}</div>
  );
};

export default Product;

/*  */
