import React, { useState } from "react";
import "../../sass/main/Product.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";

import ProductFavourite from "./ProductFavourite";

const Product = props => {
  const [activeProduct, useActiveProduct] = useState(false);

  const products = useSelector(state => state.productsReducer.products);

  let history = useHistory();

  const handleProductClcik = id => {
    history.push(`/product`);

    const SHOW_PRODUCT_DETAILS = productID => ({
      type: "SHOW_PRODUCT_DETAILS",
      productID
    });
    store.dispatch(SHOW_PRODUCT_DETAILS(id));
    useActiveProduct(!activeProduct);
  };

  const showElements = products => {
    return products.map((product, index) => (
      <>
        <div className="product" key={index}>
          <img
            alt="product-img"
            src={product.src}
            className="product__picture"
            onClick={() => handleProductClcik(product.id)}
          />

          <h6 className="product__title">{product.company}</h6>
          <p className="product__price">od {product.price},00 zł</p>
          <p>{product.type}</p>
          <ProductFavourite />
        </div>
      </>
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
