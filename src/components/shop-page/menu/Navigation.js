import React, { useState } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import "../../sass/shop-page__style/menu/Navigation.scss";

import Mans from "./Mans";
import Girls from "./Girls";
import Kids from "./Kids";

import imgMans from "../../sass/img/boy-small.jpg";
import imgGirls from "../../sass/img/woman-small.jpg";
import imgKids from "../../sass/img/kids-small.jpg";

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
      translateText: "T-shirts"
    },
    {
      id: 2,
      text: "bluzy",
      translateText: "blouses"
    },
    {
      id: 3,
      text: "kurtki",
      translateText: "jackets"
    },
    {
      id: 4,
      text: "spodnie",
      translateText: "trousers"
    }
  ];
  const ProductsListItem = productsList.map(item => (
    <li className="navigation__item" key={item.id}>
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
  const [change, useActive] = useState(false);

  const activeSpan = change ? "hamburger--active hamburger" : "hamburger";
  const activeNav = change ? "navigation--active navigation" : "navigation";

  return (
    <>
      <button className={activeSpan} onClick={async () => useActive(!change)}>
        <span className="hamburger__container">
          <span className="hamburger__line"></span>
        </span>
      </button>
      <div className={activeNav}>
        <div className="navigation__sex-choice">
          <ul className="navigation__sex-list">
            <li className="navigation__sex-item">
              <NavLink
                to="/mainSide/girls"
                className="navigation__sex-link"
                activeClassName="navigation__sex-link--active"
              >
                Kobiety
              </NavLink>
            </li>
            <li className="navigation__sex-item">
              <NavLink
                to="/mainSide/mans"
                className="navigation__sex-link"
                activeClassName="navigation__sex-link--active"
              >
                Mezczyzni
              </NavLink>
            </li>
            <li className="navigation__sex-item">
              <NavLink
                to="/mainSide/kids"
                className="navigation__sex-link"
                activeClassName="navigation__sex-link--active"
              >
                dzieci
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            path="/mainSide/mans"
            component={() => {
              return (
                <>
                  <Mans
                    showClothes={() => showClothes("mans", change, useActive)}
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
                    showClothes={() => showClothes("girls", change, useActive)}
                  />

                  <img src={imgGirls} alt="girls" className="navigation__img" />
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
    </>
  );
};

export default Navigation;
