import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "../../sass/shop-page__style/menu/Navigation.scss";
import store from "../../../redux/store";

const showClothes = (sex, change, useActive) => {
  //ICON Menu-choice
  const icon = (
    <span className="navigation__link__span">
      <span className="fas fa-chevron-right navigation__link__span-icon"></span>
    </span>
  );

  const productsList = [
    {
      id: 0,
      text: "buty",
      translateText: "buty"
    },
    {
      id: 1,
      text: "t-shirty",
      translateText: "T-shirt"
    },
    {
      id: 2,
      text: "bluzy",
      translateText: "bluza"
    },
    {
      id: 3,
      text: "kurtki",
      translateText: "kurtka"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "spodnie"
    }
  ];

  // SHOWING_PRODUCTS
  const handleChooseProduct = (sex, type) => {
    const showProduct = (product, sex) => ({
      type: "SHOW_PRODUCT",
      product,
      sex
    });

    store.dispatch(showProduct(type, sex));
  };

  const ProductsListItem = productsList.map(item => (
    <li
      className="navigation__item"
      key={item.id}
      onClick={() => handleChooseProduct(sex, item.translateText)}
    >
      <Link
        to={`/mainSide/${sex}/${item.translateText}`}
        className="navigation__link"
        onClick={() => useActive(!change)}
      >
        {item.text}
        {icon}
      </Link>
    </li>
  ));

  return <ul className="navigation__list">{ProductsListItem}</ul>;
};

const Navigation = () => {
  const productsList = [
    {
      id: 0,
      text: "buty",
      translateText: "buty"
    },
    {
      id: 1,
      text: "t-shirty",
      translateText: "T-shirt"
    },
    {
      id: 2,
      text: "bluzy",
      translateText: "bluza"
    },
    {
      id: 3,
      text: "kurtki",
      translateText: "kurtka"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "spodnie"
    }
  ];

  const dispatch = useDispatch();

  const [change, useActive] = useState(false);
  const [desktopVersion, useDesktopVersion] = useState(false);

  const activeSpan = change ? "hamburger--active hamburger" : "hamburger";
  const activeNav = change ? "navigation--active navigation" : "navigation";

  const desktopViewport = window.matchMedia(" (min-width:990px)");

  useEffect(() => {
    window.innerWidth >= 990
      ? useDesktopVersion(true)
      : useDesktopVersion(false);
  });

  desktopViewport.addListener(mq => {
    if (mq.matches) {
      useDesktopVersion(true);
    } else {
      useDesktopVersion(false);
    }
  });

  const showProduct = (product, sex) => ({
    type: "SHOW_PRODUCT",
    product,
    sex
  });

  return (
    <>
      <button
        className={activeSpan}
        style={change ? { zIndex: 5 } : { zIndex: 2 }}
        onClick={async () => useActive(!change)}
      >
        <span className="hamburger__container">
          <span className="hamburger__line"></span>
        </span>
      </button>
      {desktopVersion ? (
        <div className="navigation-desktop">
          <h1 className="navigation-desktop__title">urban shop</h1>
          <ul className="navigation-desktop__list">
            <li className="navigation-desktop__item">
              <NavLink
                to="/mainSide/home/All"
                className="navigation-desktop__link"
                activeClassName="navigation-desktop__link--active"
                onClick={() =>
                  dispatch({
                    type: "RETURN_DEFAULT_SEX"
                  })
                }
              >
                home
              </NavLink>
            </li>
            <li className="navigation-desktop__item">
              <NavLink
                activeClassName="navigation-desktop__link--active"
                to="/mainSide/girls/buty"
                className="navigation-desktop__link"
                onClick={() =>
                  dispatch({
                    type: "SHOW_PRODUCT",
                    product: "buty",
                    sex: "girls"
                  })
                }
              >
                Kobiety
              </NavLink>
              <ul className="navigation-desktop__sub-list">
                {productsList.map(product => (
                  <li
                    key={product.id}
                    onClick={() =>
                      store.dispatch(
                        showProduct(product.translateText, "girls")
                      )
                    }
                    className="navigation-desktop__sub-list_item"
                  >
                    <Link
                      to={`/mainSide/girls/${product.translateText}`}
                      className="navigation-desktop__sub-list_link"
                    >
                      {product.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="navigation-desktop__item">
              <NavLink
                activeClassName="navigation-desktop__link--active"
                to="/mainSide/mens/buty"
                className="navigation-desktop__link"
                onClick={() =>
                  dispatch({
                    type: "SHOW_PRODUCT",
                    product: "buty",
                    sex: "mens"
                  })
                }
              >
                Mężczyźni
              </NavLink>
              <ul className="navigation-desktop__sub-list">
                {productsList.map(product => (
                  <li
                    key={product.id}
                    onClick={() =>
                      store.dispatch(showProduct(product.translateText, "mens"))
                    }
                    className="navigation-desktop__sub-list_item"
                  >
                    <Link
                      to={`/mainSide/mens/${product.translateText}`}
                      className="navigation-desktop__sub-list_link"
                    >
                      {product.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="navigation-desktop__item">
              <NavLink
                activeClassName="navigation-desktop__link--active"
                to="/mainSide/kids/buty"
                className="navigation-desktop__link"
                onClick={() =>
                  dispatch({
                    type: "SHOW_PRODUCT",
                    product: "buty",
                    sex: "kids"
                  })
                }
              >
                dzieci
              </NavLink>
              <ul className="navigation-desktop__sub-list">
                {productsList.map(product => (
                  <li
                    key={product.id}
                    onClick={() =>
                      store.dispatch(showProduct(product.translateText, "kids"))
                    }
                    className="navigation-desktop__sub-list_item"
                  >
                    <Link
                      to={`/mainSide/kids/${product.translateText}`}
                      className="navigation-desktop__sub-list_link"
                    >
                      {product.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="navigation-desktop__item">
              <NavLink
                to="/mainSide/home/All"
                className="navigation-desktop__link"
                activeClassName="navigation-desktop__link--active"
                onClick={() => {
                  dispatch({
                    type: "RETURN_DEFAULT_SEX"
                  });
                  window.scrollTo(0, 700);
                }}
              >
                promocje
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className={activeNav}>
          <div className="navigation__sex-choice">
            <ul className="navigation__sex-list">
              <li className="navigation__sex-item">
                <NavLink
                  to="/mainSide/home/All"
                  className="navigation__sex-link"
                  activeClassName="navigation__sex-link--active"
                  onClick={() =>
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    })
                  }
                >
                  home
                </NavLink>
              </li>
              <li className="navigation__sex-item">
                <NavLink
                  to="/mainSide/girls"
                  className="navigation__sex-link"
                  activeClassName="navigation__sex-link--active"
                  onClick={() =>
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    })
                  }
                >
                  Kobiety
                </NavLink>
              </li>

              <li className="navigation__sex-item">
                <NavLink
                  to="/mainSide/mens"
                  className="navigation__sex-link"
                  activeClassName="navigation__sex-link--active"
                  onClick={() =>
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    })
                  }
                >
                  Mężczyźni
                </NavLink>
              </li>
              <li className="navigation__sex-item">
                <NavLink
                  to="/mainSide/kids"
                  className="navigation__sex-link"
                  activeClassName="navigation__sex-link--active"
                  onClick={() =>
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    })
                  }
                >
                  dzieci
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
