import React, { useState } from "react";
import "../../sass/menu-options/Shopping.scss";
import { useSelector } from "react-redux";
import ShopOptions from "../menu/ShopOptions";
import store from "../../../redux/store";

const ShoppingList = () => {
  const [deleteProduct, useDeleteProduct] = useState(false);
  const [productQuantity, useProductQuantity] = useState(1);
  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  const productsToBuy = buyShopProduct.map((product, index) => (
    <div className="products__product" key={index}>
      <img src={product.src} className="products__img" />
      <div className="products__info">
        <span className="products__info-content">
          Marka:<b> {product.company}</b>
        </span>
        <span className="products__info-content">
          Typ Produktu:<b>{product.type}</b>
        </span>
        <span className="products__info-content">
          Kolor: <b>Black</b>
        </span>
        <span className="products__info-content">
          Rozmiar: <b>{product.size}</b>
        </span>
        <select
          name="sizes"
          className="products__quantity"
          value={productQuantity}
          onChange={e => useProductQuantity(e.target.value)}
        >
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="products__price">
          <span className="products__promotion">
            {productQuantity * product.price - 30}zł
          </span>
          <span className="products__price-item">
            {productQuantity * product.price}zł
          </span>
        </div>
      </div>
      <div
        className={
          deleteProduct
            ? "products__delete products__delete--active"
            : "products__delete"
        }
        onClick={() => {
          const deleteFromProductList = product => ({
            type: "DELETE_FROM_SHOP_LIST",
            product
          });

          store.dispatch(deleteFromProductList(product));
          useDeleteProduct(!deleteProduct);
        }}
      >
        <span className="far fa-trash-alt products__delete-icon"></span>
      </div>
    </div>
  ));
  return (
    <>
      <div className="shop-list">
        <ShopOptions />

        <div className="products">
          {buyShopProduct.length !== 0 ? (
            <h2 className="products__length">
              Koszyk ({buyShopProduct.length} art.)
            </h2>
          ) : null}
          {buyShopProduct.length === 0 ? (
            <h1>Nie masz żadnych przedmiotów w swoim koszyku :(</h1>
          ) : (
            productsToBuy
          )}
        </div>
      </div>
      <div className="fees"></div>
    </>
  );
};

export default ShoppingList;
