/*import React, { useState } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import "../../sass/shop-page__style/menu/Navigation.scss";

import Mans from "./Mans";
import Girls from "./Girls";
import Kids from "./Kids";

import imgMans from "../../sass/img/boy-small.jpg";
import imgGirls from "../../sass/img/woman-small.jpg";
import imgKids from "../../sass/img/kids-small.jpg";

// REDUX
import { connect } from "react-redux";
import * as active from "../../../redux/actions/actionsPage";
import PropTypes from "prop-types";

const showClothes = sex => {
  const [hide, useActive] = useState(false);
  return (
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link
          to={`/mainSide/${sex}/shoes`}
          className="navigation__link"
          onClick={() => useActive(!hide)}
        >
          buty
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={`/mainSide/${sex}/t-shirt`} className="navigation__link">
          t-shirty
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={`/mainSide/${sex}/blouses`} className="navigation__link">
          bluzy
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={`/mainSide/${sex}/jackets`} className="navigation__link">
          kurtki
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={`/mainSide/${sex}/trousers`} className="navigation__link">
          spodnie
        </Link>
      </li>
    </ul>
  );
};

const Navigation = props => {
  const [change, useActive] = useState(false);

  const activeSpan = change ? "hamburger--active hamburger" : "hamburger";
  const activeNav = change ? "navigation--active navigation" : "navigation";
  console.log(activeNav);
  return (
    <>
      <button
        className={activeSpan}
        onClick={async () => props.dispatch(active.changeMenuState(!change))}
      >
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
                  <Mans showClothes={showClothes} />,
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
                  <Girls showClothes={showClothes} />,
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
                  <Kids showClothes={showClothes} />,
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

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    active: state.active
  };
}

export default connect(mapStateToProps)(Navigation);
 */
