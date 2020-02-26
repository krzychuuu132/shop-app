import React, { useState, useEffect, useRef } from "react";
import "../../sass/sex_categories/Product_filters.scss";

import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductFavourite from "../main/ProductFavourite";
import PathInfo from "./PathInfo";

const showProduct = (product, index, view) => {
  return (
    <div
      className={view === "first" ? "product" : "product product--second_view"}
      key={index}
    >
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

const showClothes = (sex, useActiveCategory, dispatch, products_sex) => {
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

  const product_length = products_sex.map(product => product);
  const insertCounter = product => {
    const [counter, setCounter] = useState([]);
    const length = product_length.filter(item => item.type === product.text)
      .length;
  };

  return productsList.map((product, index) => (
    <li className="filters__categories-item" key={index}>
      <NavLink
        exact={true}
        to={`/mainSide/${sex}/${product.text}`}
        className="filters__categories-link"
        activeClassName="filters__categories-link--active"
        onClick={() => {
          useActiveCategory(product.text);
          dispatch({
            type: "SHOW_PRODUCT",
            product: product.text,
            sex: sex
          });
        }}
      >
        <span>{product.translateText}</span>
        <span className="filters__categories-length"></span>
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

const showCategoryFilters = setCategoryFilters => {
  const category_filters = [
    { id: 0, name: "typ produktu", className: "mobile-filters__item" },
    { id: 1, name: "kolor", className: "mobile-filters__item" },
    { id: 2, name: "producent", className: "mobile-filters__item" },
    { id: 3, name: "cena", className: "mobile-filters__item" }
  ];

  return category_filters.map(product => (
    <li
      className={product.className}
      key={product.id}
      onClick={e => {
        document
          .querySelectorAll(".mobile-filters__item")
          .forEach(item =>
            item.classList.remove("mobile-filters__item--active")
          );
        e.target.className =
          "mobile-filters__item mobile-filters__item--active";
        setCategoryFilters(e.target.innerText);
      }}
    >
      {product.name}
    </li>
  ));
};

const Product_filters = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [activeCategory, useActiveCategory] = useState("buty");
  const [sorting, useSorting] = useState("");
  const [size, useSize] = useState("");
  const [mobile, setMobile] = useState(false);
  const [pageNumber, usePageNumber] = useState(0);
  const [productsState, useProductState] = useState([]);
  const [price, usePrice] = useState(220);
  const [view, setView] = useState("first");
  const [color, setColor] = useState("");
  const [categoryFilters, setCategoryFilters] = useState("");
  const mobileFilters = useRef(null);

  const products = useSelector(state => state.productsReducer.products);

  const products_sex = products.filter(product => product.sex === props.sex);
  const products_in_one_card = 5;
  const buttonCounter = Math.floor(
    products_sex.length / products_in_one_card + 0.5
  );
  const active_page_number = {
    backgroundColor: "black",
    color: "white"
  };
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

  const HandleColorChange = e => {
    setColor(e.target.value);

    dispatch({
      type: "SHOW_COLOR",
      color: e.target.value,
      category: activeCategory
    });
  };

  useEffect(() => {
    window.innerWidth >= 920 ? setMobile(false) : setMobile(true);
  });

  var x = window.matchMedia("(max-width: 920px)");
  x.addListener(mq => {
    if (mq.matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  const showCategoryProducts = (categoryFilters, sex) => {
    switch (categoryFilters) {
      case "Typ Produktu":
        return (
          <div className="filters__categories">
            <ul className="filters__categories-list">
              <h1 className="filters__categories-title">Wybierz produkt</h1>
              {showClothes(
                props.sex,
                useActiveCategory,
                dispatch,
                products_sex
              )}
            </ul>
          </div>
        );
      case "Kolor":
        return (
          <div className="filters__color">
            <h3 className="filters__color-title">Wybierz kolor</h3>
            <div className="filters__color-choice">
              <input
                type="radio"
                id="blue"
                name="color"
                value="blue"
                className="filters__color-input_one"
                onChange={HandleColorChange}
              />
              <input
                type="radio"
                id="red"
                name="color"
                value="red"
                className="filters__color-input_two"
                onChange={HandleColorChange}
              />
              <input
                type="radio"
                id="black"
                name="color"
                value="black"
                className="filters__color-input_three"
                onChange={HandleColorChange}
              />
              <input
                type="radio"
                id="yellow"
                name="color"
                value="yellow"
                className="filters__color-input_four"
                onChange={HandleColorChange}
              />
            </div>
          </div>
        );
      case "Producent":
        return (
          <div className="filters__brand">
            <h3 className="filters__brand-title">wybierz producenta</h3>
            <ul className="filters__brand-list">
              {showProductBrand(dispatch)}
            </ul>
          </div>
        );
      case "Cena":
        return (
          <div className="filters__price">
            <h3 className="filters__price-title">wybierz cenę</h3>
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
                dispatch({
                  type: "SHOW_PRODUCT_PRICE",
                  price: e.target.value,
                  category: activeCategory
                });
                usePrice(e.target.value);
              }}
              className="filters__price-input"
            />
          </div>
        );
      default:
        return (
          <h3
            className="filters__categories-title"
            style={{ color: "red", marginTop: "25px" }}
          >
            Wybierz opcje filtrowania !{" "}
          </h3>
        );
    }
  };

  // Call listener function at run time
  // Attach listener function on state changes

  return (
    <>
      <PathInfo sex={props.sex} category={activeCategory} />
      <div className="filters">
        <div
          className={
            !mobile
              ? "filters__categories"
              : "filters__categories filters__categories--active"
          }
        >
          <ul className="filters__categories-list">
            <h1 className="filters__categories-title">clothes</h1>
            {showClothes(props.sex, useActiveCategory, dispatch, products_sex)}
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
        <div
          className={
            !mobile
              ? "filters__price"
              : "filters__price filters__categories--active"
          }
        >
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
              dispatch({
                type: "SHOW_PRODUCT_PRICE",
                price: e.target.value,
                category: activeCategory
              });
              usePrice(e.target.value);
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
              else if (type === "high_price")
                dispatch({ type: "SORT_PRODUCT" });

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
                <option value="type" className="filters__sorting-option">
                  Size
                </option>
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
                <option value="type" className="filters__sorting-option">
                  Size
                </option>
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
          {mobile ? (
            <button
              className="mobile-filters_btn"
              onClick={() => {
                const className = mobileFilters.current.className;
                className === "mobile-filters"
                  ? (mobileFilters.current.className =
                      "mobile-filters mobile-filters--active")
                  : (mobileFilters.current.className = "mobile-filters");
              }}
            >
              Filtry
            </button>
          ) : null}
          <div className="filters__sorting-view">
            <button
              onClick={() => setView("first")}
              className="filters__sorting-btn"
              style={view === "first" ? { color: "black" } : null}
            >
              <span className="fas fa-align-justify"></span>
            </button>
            {!mobile ? (
              <button
                onClick={() => setView("second")}
                style={view === "second" ? { color: "black" } : null}
                className="filters__sorting-btn"
              >
                <span className="fas fa-align-left"></span>
              </button>
            ) : null}
          </div>
        </div>

        <div
          className={
            !mobile
              ? "filters__color"
              : "filters__color filters__categories--active"
          }
        >
          <h3 className="filters__color-title">color</h3>
          <div className="filters__color-choice">
            <input
              type="radio"
              id="blue"
              name="color"
              value="blue"
              className="filters__color-input_one"
              onChange={HandleColorChange}
            />
            <input
              type="radio"
              id="red"
              name="color"
              value="red"
              className="filters__color-input_two"
              onChange={HandleColorChange}
            />
            <input
              type="radio"
              id="black"
              name="color"
              value="black"
              className="filters__color-input_three"
              onChange={HandleColorChange}
            />
            <input
              type="radio"
              id="yellow"
              name="color"
              value="yellow"
              className="filters__color-input_four"
              onChange={HandleColorChange}
            />
          </div>
        </div>
        <div className="filters__products">
          <div
            className={
              view === "first"
                ? "product-container"
                : "product-container product-container--view"
            }
          >
            {pageNumber === 0
              ? products_sex.map((product, index) =>
                  showProduct(product, index, view)
                )
              : productsState.map(
                  (product, index) => showProduct(product, index, view),
                  window.scrollTo(0, 500)
                )}
          </div>
        </div>
      </div>

      <div className="filters__page-numbers">
        <div className="filters__page-numbers_element">{showBtns()}</div>
      </div>

      <div className="mobile-filters" ref={mobileFilters}>
        <h3 className="mobile-filters__title">
          Filtry{" "}
          <button
            className="mobile-filters__btn"
            onClick={() => {
              mobileFilters.current.className = "mobile-filters";
            }}
          >
            <span className="fas fa-times mobile-filters__btn-icon"></span>
          </button>
        </h3>
        <div className="mobile-filters__wrapper">
          <div className="mobile-filters__settings">
            <div className="mobile-filters__category">
              <span className="mobile-filters__category-text">Kategoria:</span>
              <p className="mobile-filters__category-title">{activeCategory}</p>
            </div>

            <ul className="mobile-filters__list">
              {showCategoryFilters(setCategoryFilters)}
            </ul>
          </div>
          <div className="mobile-filters__elements">
            {showCategoryProducts(categoryFilters)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_filters;

/*  



        <div
          className={
            !mobile
              ? "filters__brand"
              : "filters__brand filters__categories--active"
          }
        >
          <h3 className="filters__brand-title">brand</h3>
          <ul className="filters__brand-list">{showProductBrand(dispatch)}</ul>
        </div> */
