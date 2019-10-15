import React from "react";
import { useSelector } from "react-redux";
import "../../sass/main/ProductDetails.scss";

const ProductDetails = props => {
  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products
  );

  return (
    <>
      <div className="product-details">
        <img
          src={productDetails[0].src}
          alt="product-img"
          className="product-details__img"
        />
        <p className="product-details__company">
          {productDetails[0].company} >
        </p>

        <h3 className="product-details__type">{productDetails[0].type}</h3>

        <p className="product-details__price">
          <span className="product-details__actual_price">
            {" "}
            {productDetails[0].price} zł
          </span>
          <span className="product-details__vat">w tym VAT</span>
        </p>
        <p className="product-details__promotion">30% taniej</p>
        <p className="product-details__color">Kolor: bordeaux</p>
      </div>
      <div className="options">
        <span className="options__type">Rozmiary europejsie</span>
        <select name="sizes" className="options__size" value="Wybierz rozmiar">
          <option value="">Wybierz rozmiar</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
        </select>

        <button className="options__btn">
          <span className="options__btn-text">Dodaj do koszyka</span>
        </button>
        <div className="options__transport"></div>
        <div className="options__transport"></div>
      </div>
    </>
  );
};

export default ProductDetails;
