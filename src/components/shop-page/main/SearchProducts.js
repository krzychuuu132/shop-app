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
  console.log(activeCategory);

  const showComponent = title => {
    const titleOfFilter = (
      <h1 className="filter__sort-options_title">{title}</h1>
    );
    if (activeCategory === "sortuj")
      return (
        <div className="sorting">
          {titleOfFilter}
          <span className="sorting__element">popularność</span>
          <span className="sorting__element">nowości</span>
          <span className="sorting__element">najniższa cena</span>
          <span className="sorting__element">najwyższa cena</span>
          <span className="sorting__element">wyprzedaż</span>
        </div>
      );
    else if (activeCategory === "rozmiar")
      return (
        <>
          {titleOfFilter}
          <div className="size">
            <span className="size__element">36</span>
            <span className="size__element">37</span>
            <span className="size__element">38</span>
            <span className="size__element">39</span>
            <span className="size__element">40</span>
            <span className="size__element">41</span>
            <span className="size__element">42</span>
            <span className="size__element">43</span>
            <span className="size__element">44</span>
          </div>
        </>
      );
    else if (activeCategory === "marka") return titleOfFilter;
    else if (activeCategory === "cena") return titleOfFilter;
  };

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
            onClick={() => useActiveCategory("sortuj")}
          >
            sortuj
          </div>
          <div
            className="filter__size filter__element"
            onClick={() => useActiveCategory("rozmiar")}
          >
            rozmiar
          </div>
          <div
            className="filter__bussines filter__element"
            onClick={() => useActiveCategory("marka")}
          >
            marka
          </div>
          <div className="filter__price filter__element">
            cena
            <input type="range" />
            <input type="checkbox" className="filter__price-check" />
            <label className="filter__price-promotion">tylko promocje</label>
          </div>

          <div
            className={
              activeCategory
                ? "filter__sort-options filter__sort-options--active"
                : "filter__sort-options"
            }
          >
            {showComponent(activeCategory)}

            <div className="filter__exit">
              <h3 className="filter__exit-item">zamknij</h3>
              <button className="filter__exit-btn">
                <span
                  className="fas fa-times filter__exit-icon"
                  onClick={() => useActiveCategory(!activeCategory)}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProducts;
