import React, { useState, useRef } from "react";
import "../../sass/main/SearchProducts.scss";
import { Route } from "react-router-dom";
const SearchProducts = props => {
  const [active, useActive] = useState(false);

  const [activeCategory, useActiveCategory] = useState("");

  const divSearch = useRef(null);

  const routes = props.sexChoice.map(person => (
    <Route
      path={person.path}
      key={person.id}
      component={() => <h3 className={person.class}>{person.type}</h3>}
    ></Route>
  ));

  return (
    <>
      <section className="search">
        {routes}
        <div className="search__filtr">
          <p className="search__text">Filtr</p>
          <button
            className="fas fa-sliders-h"
            onClick={() => useActive(!active)}
          ></button>
        </div>

        <div
          className={
            active ? " filter search--active" : "filter search__unactive"
          }
          ref={divSearch}
        >
          <button
            onClick={() =>
              (divSearch.current.className = "filter search__unactive")
            }
            className="filter__btn"
          >
            <span className="fas fa-arrow-left"></span>
          </button>
          <h1 className="filter__title">filtr</h1>
          <div
            className="filter__sort filter__element"
            onClick={() => useActiveCategory("sort")}
          >
            sortuj
          </div>
          <div className="filter__size filter__element">rozmiar</div>
          <div className="filter__bussines filter__element">marka</div>
          <div className="filter__price filter__element">
            cena
            <input type="range" />
            <input type="checkbox" className="filter__price-check" />
            <label className="filter__price-promotion">tylko promocje</label>
          </div>

          <div className="filter__color filter__element">cena</div>
          <div
            className={
              activeCategory
                ? "filter__sort-options filter__sort-options--active"
                : "filter__sort-options"
            }
          >
            siemannnnno
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProducts;
