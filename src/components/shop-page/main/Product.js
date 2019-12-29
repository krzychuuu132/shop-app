import React, { useState, useEffect } from "react";
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

    window.scrollTo(0, 0);
    const SHOW_PRODUCT_DETAILS = productID => ({
      type: "SHOW_PRODUCT_DETAILS",
      productID
    });
    store.dispatch(SHOW_PRODUCT_DETAILS(id));
    useActiveProduct(!activeProduct);
  };

  const showElements = products => {
    return products.map((product, index) => (
      <div className="product" key={index}>
        <img
          alt="product-img"
          src={product.product.images[0].url}
          className="product__picture"
          onClick={() => handleProductClcik(product.product.id)}
        />

        <h6 className="product__title">
          <span> {product.product.name}</span> - {product.product.brand}
        </h6>
        <p className="product__price"> {product.product.price},00 zł</p>

        <ProductFavourite product={product} />
      </div>
    ));
  };

  const showProduct = (type = props.type) => {
    const searchProducts = () => {
      const get = products.filter(product => {
        const sex = product.product.categories[0].name;

        if (type === "girls" && sex === "girls") {
          return product;
        } else if (type === "kids" && sex === "kids") {
          return product;
        } else if (type === "mens" && sex === "mens") {
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
