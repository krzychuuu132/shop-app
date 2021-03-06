import React, { useState } from "react";
import "../../sass/main/Product.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import ProductFavourite from "./ProductFavourite";

const Product = props => {
  // STATE
  const [activeProduct, useActiveProduct] = useState(false);

  // REDUX STATE
  const products = useSelector(state => state.productsReducer.products);

  let history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleProductClcik = id => {
    history.push(`/product`);
    window.scrollTo(0, 0);

    dispatch({ type: "SHOW_PRODUCT_DETAILS", productID: id });

    useActiveProduct(!activeProduct);
  };

  const showElements = products => {
    

    return products.map((product, index) => (
      <div
        className={
          index > 7 && location === "/mainSide/home/All"
            ? "product product--hidden"
            : "product"
        }
        key={index}
        onClick={() => handleProductClcik(product.id)}
      >
        {products[0] === product ? (
          <div className="product__hot">hot</div>
        ) : null}
        <img
          alt="product-img"
          src={product.src}
          className="product__picture"
          style={
            products[0] === product
              ? { paddingTop: "5px", marginTop: "0px" }
              : null
          }
        />

        <h6 className="product__title">{product.type}</h6>
        <div className="product__rating">
          <span className="fa fa-star checked product__rating-checked"></span>
          <span className="fa fa-star checked product__rating-checked"></span>
          <span className="fa fa-star checked product__rating-checked"></span>
          <span className="fa fa-star checked product__rating-checked"></span>
          <span className="fa fa-star checked product__rating-no_checked"></span>
        </div>
        <p className="product__price">
          {" "}
          {product.price}${" "}
          <span className="product__promotion">
            {parseInt(product.price) + 100}$
          </span>
        </p>
        <div className="product__options">
          <ProductFavourite product={product} />
          <div className="product__options-shopping">
            <span className="fas fa-shopping-cart products__options-shopping_icon"></span>
          </div>
        </div>
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
        } else {
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
