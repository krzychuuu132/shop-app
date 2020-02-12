import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../../sass/sex_categories/Product_filters.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductFavourite from "../main/ProductFavourite";

const showProduct = (product, index) => {
  return (
    <div className="product" key={index}>
      <img alt="product-img" src={product.src} className="product__picture" />

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
  );
};

const showClothes = (sex, useActiveCategory, dispatch) => {
  const productsList = [
    {
      id: 0,
      text: "buty",
      translateText: "buty"
    },
    {
      id: 1,
      text: "T-shirt",
      translateText: "T-shirty"
    },
    {
      id: 2,
      text: "bluza",
      translateText: "bluzy"
    },
    {
      id: 3,
      text: "kurtka",
      translateText: "kurtki"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "spodnie"
    }
  ];

  return productsList.map((product, index) => (
    <li className="filters__categories-item" key={index}>
      <NavLink
        exact={true}
        to="#"
        className="filters__categories-link"
        onClick={() => {
          useActiveCategory(product.text);
          dispatch({
            type: "SHOW_PRODUCT",
            product: product.text,
            sex: sex
          });
        }}
      >
        {product.translateText}
      </NavLink>
    </li>
  ));
};

const showProductBrand = dispatch => {
  const productsBrand = [
    {
      id: 0,
      text: "New Balance"
    },
    {
      id: 1,
      text: "Puma"
    },
    {
      id: 2,
      text: "Nike"
    },
    {
      id: 3,
      text: "Armani"
    }
  ];

  return productsBrand.map((product, index) => (
    <li
      className="filters__brand-item"
      key={index}
      onClick={() => {
        dispatch({
          type: "SHOW_MARK",
          product: product
        });
      }}
    >
      {product.text}
    </li>
  ));
};
const Product_filters = props => {
  const dispatch = useDispatch();
  const [activeCategory, useActiveCategory] = useState("T-shirty");
  const [sorting, useSorting] = useState("");
  const [size, useSize] = useState("");
  const [pageNumber, usePageNumber] = useState(0);
  const [productsState, useProductState] = useState([]);
  const [price, usePrice] = useState(220);

  const products = useSelector(state => state.productsReducer.products);
  const products_sex = products.filter(product => product.sex === props.sex);
  const products_in_one_card = 5;
  const buttonCounter = Math.floor(
    products_sex.length / products_in_one_card + 0.5
  );

  const showBtns = () => {
    const table = [];
    for (let i = 0; i < buttonCounter; i++) {
      table.push(i + 1);
    }
    const btns = table.map(number => {
      return (
        <button
          className="filters__page-numbers_btn"
          onClick={() => handleChangeNumberPage(number)}
          style={pageNumber === number ? active_page_number : null}
          key={number}
        >
          {number}
        </button>
      );
    });

    return btns;
  };

  const handleChangeNumberPage = counter => {
    console.log(counter);
    const initialProducts = products_sex.map(product => product);

    useProductState(products_sex);

    usePageNumber(counter);

    if (counter === 1) {
      const slice_products = initialProducts.slice(0, 5);

      useProductState(slice_products);
    }
    if (counter === 2) {
      const slice_products = initialProducts.slice(5, 10);

      useProductState(slice_products);
    }

    if (counter === 3) {
      const slice_products = initialProducts.slice(10, 15);

      useProductState(slice_products);
    }
    if (counter === 4) {
      const slice_products = initialProducts.slice(
        15,
        initialProducts.length - 1
      );

      useProductState(slice_products);
    }
  };

  const active_page_number = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <div className="filters">
      <div className="filters__categories">
        <ul className="filters__categories-list">
          <h1 className="filters__categories-title">clothes</h1>
          {showClothes(props.sex, useActiveCategory, dispatch)}
        </ul>
      </div>
      <div className="filters__banner">
        <div className="filters__banner-advert">
          <h1 className="filters__banner-title">stylish clothes</h1>
          <p className="filters__banner-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="filters__banner-link">shop now</span>
          <div className="filters__banner-img">
            <img
              src="/img/advert_product.png"
              alt="advert picture"
              className="filters__banner-picture"
            />
          </div>
        </div>
      </div>
      <div className="filters__price">
        <h3 className="filters__price-title">prices</h3>
        <label className="filters__price-name">
          <span className="filters__price-name_type">Ranger</span>
          <span className="filters__price-name_price">$10-{price}$</span>
        </label>
        <input
          type="range"
          min="10"
          max="220"
          step="10"
          value={price}
          onChange={e => {
            usePrice(e.target.value);
            dispatch({
              type: "SHOW_PRODUCT_PRICE",
              price: price,
              category: activeCategory
            });
          }}
          className="filters__price-input"
        />
      </div>
      <div className="filters__sorting">
        <span className="filters__sorting-length">
          {products_sex.length} Items
        </span>{" "}
        <label className="filters__sorting-sort" htmlFor="Sorting_by">
          Sort by{" "}
        </label>
        <select
          className="filters__sorting-select"
          id="Sorting_by"
          onChange={e => {
            const type = e.target.value;
            if (type === "name") dispatch({ type: "SHOW_ALL_PRODUCTS" });
            else if (type === "low_price")
              dispatch({ type: "SORT_PRODUCT_SMALLEST" });
            else if (type === "high_price") dispatch({ type: "SORT_PRODUCT" });

            useSorting(type);
          }}
        >
          <option value="type" className="filters__sorting-option">
            Type
          </option>
          <option value="name" className="filters__sorting-option">
            Name
          </option>
          <option value="low_price" className="filters__sorting-option">
            lowest price
          </option>
          <option value="high_price" className="filters__sorting-option">
            highest price
          </option>
        </select>
        <label className="filters__sorting-sort" htmlFor="showProducts">
          Size{" "}
        </label>
        <select
          className="filters__sorting-select"
          id="showProducts"
          onChange={e => {
            const size = e.target.value;
            dispatch({ type: "SHOW_SIZE", size, category: activeCategory });

            useSize(size);
          }}
        >
          {activeCategory === "buty" ? (
            <>
              <option value="38" className="filters__sorting-option">
                38
              </option>
              <option value="39" className="filters__sorting-option">
                39
              </option>
              <option value="40" className="filters__sorting-option">
                40
              </option>
              <option value="41" className="filters__sorting-option">
                41
              </option>
            </>
          ) : (
            <>
              <option value="XS" className="filters__sorting-option">
                XS
              </option>
              <option value="M" className="filters__sorting-option">
                M
              </option>
              <option value="L" className="filters__sorting-option">
                L
              </option>
              <option value="XL" className="filters__sorting-option">
                XL
              </option>
            </>
          )}
        </select>
      </div>
      <div className="filters__color">
        <h3 className="filters__color-title">color</h3>
        <div className="filters__color-choice">
          <input
            type="radio"
            id="blue"
            name="color"
            value="blue"
            className="filters__color-input_one"
          />
          <input
            type="radio"
            id="red"
            name="color"
            value="red"
            className="filters__color-input_two"
          />
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            className="filters__color-input_three"
          />
          <input
            type="radio"
            id="yellow"
            name="color"
            value="yellow"
            className="filters__color-input_four"
          />
        </div>
      </div>
      <div className="filters__products">
        <div className="product-container">
          {pageNumber === 0
            ? products_sex.map((product, index) => showProduct(product, index))
            : productsState.map(
                (product, index) => showProduct(product, index),
                window.scrollTo(0, 500)
              )}
        </div>
      </div>
      <div className="filters__brand">
        <h3 className="filters__brand-title">brand</h3>
        <ul className="filters__brand-list">{showProductBrand(dispatch)}</ul>
      </div>
      <div className="filters__more">more</div>
      <div className="filters__page-numbers">
        <div className="filters__page-numbers_element">{showBtns()}</div>
      </div>
    </div>
  );
};

export default Product_filters;
