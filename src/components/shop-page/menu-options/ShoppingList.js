import React from "react";
import "../../sass/menu-options/Shopping.scss";
import { useSelector } from "react-redux";
import ShopOptions from "../menu/ShopOptions";

const ShoppingList = () => {
  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  const productsToBuy = buyShopProduct.map(product => (
    <div className="products__product">
      <img src={product.src} className="products__img" />
      <div className="products__info">
        <span>Marka {product.company}</span>
        <span>Typ Produktu {product.type}</span>
        <span>Kolor: Black</span>
        <span>Rozmiar: {product.size}</span>
      </div>
    </div>
  ));
  return (
    <>
      <div className="shop-list">
        <ShopOptions />
        <div className="products">{productsToBuy}</div>
      </div>
    </>
  );
};

export default ShoppingList;
