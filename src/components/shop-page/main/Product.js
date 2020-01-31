import React, { useState } from "react";
import "../../sass/main/Product.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import ProductFavourite from "./ProductFavourite";

const Product = props => {
  // STATE
  const [activeProduct, useActiveProduct] = useState(false);

  // REDUX STATE
  const products = useSelector(state => state.productsReducer.products);

  let history = useHistory();

  const handleProductClcik = id => {
    //console.log(id);
    history.push(`/product`);
    window.scrollTo(0, 0);

    store.dispatch({ type: "SHOW_PRODUCT_DETAILS", productID: id });

    useActiveProduct(!activeProduct);
  };

  const showElements = products => {
    return products.map((product, index) => (
      <div className="product" key={index}>
        <img
          alt="product-img"
          src={product.src}
          className="product__picture"
          onClick={() => handleProductClcik(product.id)}
        />

        <h6 className="product__title">
          <span> {product.type}</span> - {product.brand}
        </h6>
        <p className="product__price"> {product.price},00 zł</p>

        <ProductFavourite product={product} />
      </div>
    ));
  };

  const showProduct = (type = props.type) => {
    const searchProducts = () => {
      const get = products.filter(product => {
        const sex = product.sex;

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
