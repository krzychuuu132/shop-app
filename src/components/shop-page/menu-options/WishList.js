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
    state.productsReducer.products.filter(product => product.product.favourite)
  );
  console.log(favouriteProducts);
  const products = favouriteProducts.map(product => (
    <div className="product" key={product.product.id}>
      <img
        alt="product-img"
        src={product.product.images[0].url}
        className="product__picture"
        onClick={() => handleProductClcik(product.product.id, history)}
      />

      <h6 className="product__title">
        <span> {product.product.name}</span> - {product.product.brand}
      </h6>
      <p className="product__price"> {product.product.price},00 zł</p>
    </div>
  ));

  return (
    <div className="wish-list">
      <div className="wish-list__content">
        <h1 className="wish-list__title"> lista życzeń</h1>
      </div>
      {favouriteProducts.length === 0 ? (
        <>
          <h3 className="wish-list__nothing">Nie masz ulubionych rzeczy</h3>
          <span className="far fa-angry wish-list__nothing-icon"></span>
        </>
      ) : (
        <div className="products">{products}</div>
      )}
    </div>
  );
};

export default WishList;
