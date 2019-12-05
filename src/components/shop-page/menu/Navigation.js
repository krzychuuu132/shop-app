import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import "../../sass/shop-page__style/menu/Navigation.scss";

import Mans from "./Mans";
import Girls from "./Girls";
import Kids from "./Kids";

import imgMans from "../../sass/img/boy-small.jpg";
import imgGirls from "../../sass/img/woman-small.jpg";
import imgKids from "../../sass/img/kids-small.jpg";
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
      translateText: "shoes"
    },
    {
      id: 1,
      text: "t-shirty",
      translateText: "t-shirt"
    },
    {
      id: 2,
      text: "bluzy",
      translateText: "blouse"
    },
    {
      id: 3,
      text: "kurtki",
      translateText: "jacket"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "trousers"
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

/////////////////////

const Navigation = () => {
  let menuList = useRef(null);
  let menuSecondList = useRef(null);
  let menuThirdList = useRef(null);

  let firstLink = useRef(null);
  let secondLink = useRef(null);
  let thirdLink = useRef(null);

  const productsList = [
    {
      id: 0,
      text: "buty",
      translateText: "shoes"
    },
    {
      id: 1,
      text: "t-shirty",
      translateText: "t-shirt"
    },
    {
      id: 2,
      text: "bluzy",
      translateText: "blouse"
    },
    {
      id: 3,
      text: "kurtki",
      translateText: "jacket"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "trousers"
    }
  ];

  const dispatch = useDispatch();

  const [change, useActive] = useState(false);
  const [desktopVersion, useDesktopVersion] = useState(false);
  const [menuDesktop, useMenuDesktop] = useState(false);

  const activeSpan = change ? "hamburger--active hamburger" : "hamburger";
  const activeNav = change ? "navigation--active navigation" : "navigation";
  useEffect(() => {
    if (window.innerWidth >= 1280) {
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

  if (menuDesktop) {
  }

  return (
    <>
      <button className={activeSpan} onClick={async () => useActive(!change)}>
        <span className="hamburger__container">
          <span className="hamburger__line"></span>
        </span>
      </button>
      {desktopVersion ? (
        <div className="navigation-desktop">
          <div className="navigation-desktop__sex-choice">
            <ul className="navigation__sex-list">
              <li
                className="navigation__sex-item"
                onMouseEnter={() =>
                  TweenMax.to(
                    menuList,
                    0,

                    {
                      display: "flex",
                      height: 250,
                      opacity: 1,
                      width: 250
                    }
                  )
                }
                onMouseLeave={() =>
                  TweenMax.to(menuList, 0.5, {
                    height: 0,
                    opacity: 0,
                    display: "none",
                    width: 0
                  })
                }
              >
                <NavLink
                  to="/mainSide/girls"
                  ref={element => {
                    firstLink = element;
                  }}
                  className="navigation__sex-link"
                  activeClassName="navigation__sex-link--active"
                  onClick={() => {
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    }),
                      TweenMax.fromTo(
                        firstLink,
                        0.3,
                        { fontSize: 19 },
                        { fontSize: 16 }
                      );
                  }}
                >
                  Kobiety
                </NavLink>
                <ul
                  className="navigation-desktop__list"
                  ref={element => {
                    menuList = element;
                  }}
                >
                  {productsList.map(product => (
                    <li
                      key={product.id}
                      onClick={() =>
                        store.dispatch(
                          showProduct(product.translateText, "girls")
                        )
                      }
                      className="navigation-desktop__item"
                    >
                      <Link
                        to={`/mainSide/girls/${product.translateText}`}
                        className="navigation-desktop__link"
                      >
                        {product.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                className="navigation__sex-item"
                onMouseEnter={() =>
                  TweenMax.to(
                    menuSecondList,
                    0,

                    {
                      display: "flex",
                      height: 250,
                      opacity: 1,
                      width: 250
                    }
                  )
                }
                onMouseLeave={() =>
                  TweenMax.to(menuSecondList, 0.5, {
                    height: 0,
                    opacity: 0,
                    display: "none",
                    width: 0
                  })
                }
              >
                <NavLink
                  to="/mainSide/mens"
                  className="navigation__sex-link"
                  ref={element => {
                    secondLink = element;
                  }}
                  activeClassName="navigation__sex-link--active"
                  onClick={() => {
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    }),
                      TweenMax.fromTo(
                        secondLink,
                        0.3,
                        { fontSize: 19 },
                        { fontSize: 16 }
                      );
                  }}
                >
                  Meżczyźni
                </NavLink>
                <ul
                  className="navigation-desktop__list"
                  ref={element => {
                    menuSecondList = element;
                  }}
                >
                  {productsList.map(product => (
                    <li
                      key={product.id}
                      onClick={() =>
                        store.dispatch(
                          showProduct(product.translateText, "mens")
                        )
                      }
                      className="navigation-desktop__item"
                    >
                      <Link
                        to={`/mainSide/mens/${product.translateText}`}
                        className="navigation-desktop__link"
                      >
                        {product.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                className="navigation__sex-item"
                onMouseEnter={() =>
                  TweenMax.to(
                    menuThirdList,
                    0,

                    {
                      display: "flex",
                      height: 250,
                      opacity: 1,
                      width: 250
                    }
                  )
                }
                onMouseLeave={() =>
                  TweenMax.to(menuThirdList, 0.5, {
                    height: 0,
                    opacity: 0,
                    display: "none",
                    width: 0
                  })
                }
              >
                <NavLink
                  to="/mainSide/kids"
                  className="navigation__sex-link"
                  ref={element => {
                    thirdLink = element;
                  }}
                  activeClassName="navigation__sex-link--active"
                  onClick={() => {
                    dispatch({
                      type: "RETURN_DEFAULT_SEX"
                    }),
                      TweenMax.fromTo(
                        thirdLink,
                        0.3,
                        { fontSize: 19 },
                        { fontSize: 16 }
                      );
                  }}
                >
                  dzieci
                </NavLink>
                <ul
                  className="navigation-desktop__list"
                  ref={element => {
                    menuThirdList = element;
                  }}
                >
                  {productsList.map(product => (
                    <li
                      key={product.id}
                      onClick={() =>
                        store.dispatch(
                          showProduct(product.translateText, "kids")
                        )
                      }
                      className="navigation-desktop__item"
                    >
                      <Link
                        to={`/mainSide/kids/${product.translateText}`}
                        className="navigation-desktop__link"
                      >
                        {product.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={activeNav}>
          <div className="navigation__sex-choice">
            <ul className="navigation__sex-list">
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
                  Meżczyźni
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

          <Switch>
            <Route
              path="/mainSide/mens"
              component={() => {
                return (
                  <>
                    <Mans
                      showClothes={() => showClothes("mens", change, useActive)}
                    />

                    <img src={imgMans} alt="mans" className="navigation__img" />
                  </>
                );
              }}
            />

            <Route
              path="/mainSide/girls"
              component={() => {
                return (
                  <>
                    <Girls
                      showClothes={() =>
                        showClothes("girls", change, useActive)
                      }
                    />

                    <img
                      src={imgGirls}
                      alt="girls"
                      className="navigation__img"
                    />
                  </>
                );
              }}
            />

            <Route
              path="/mainSide/kids"
              component={() => {
                return (
                  <>
                    <Kids
                      showClothes={() => showClothes("kids", change, useActive)}
                    />

                    <img src={imgKids} alt="kids" className="navigation__img" />
                  </>
                );
              }}
            />
          </Switch>
        </div>
      )}
    </>
  );
};

export default Navigation;
