import React from "react";
import "../../sass/menu-options/WishList.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";

const handleProductClcik = (id, history) => {
  history.push(`/product`);

  const SHOW_PRODUCT_DETAILS = productID => ({
    type: "SHOW_PRODUCT_DETAILS",
    productID
  });
  store.dispatch(SHOW_PRODUCT_DETAILS(id));
};

const WishList = () => {
  let history = useHistory();

  const favouriteProducts = useSelector(state =>
    state.productsReducer.products.filter(product => product.favourite)
  );

  const products = favouriteProducts.map(product => (
    <div className="product" key={product.id}>
      <img
        alt="product-img"
        src={product.src}
        className="product__picture"
        onClick={() => handleProductClcik(product.id, history)}
      />

      <h6 className="product__title">{product.company}</h6>
      <p className="product__price">od {product.price},00 zł</p>
      <p>{product.type}</p>
    </div>
  ));

  return (
    <div className="wish-list">
      <div className="wish-list__content">
        <h1 className="wish-list__title">moja lista życzeń</h1>
      </div>
      <div className="products">{products}</div>
    </div>
  );
};

export default WishList;
