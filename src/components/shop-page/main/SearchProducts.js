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
  const sizes = [
    {
      number: 36
    },
    {
      number: 37
    },
    {
      number: 38
    },
    {
      number: 39
    },
    {
      number: 40
    }
  ];
  const sortOptions = [
    {
      text: "popularność"
    },
    {
      text: "nowości"
    },
    {
      text: "najniższa cena"
    },
    {
      text: "najwyższa cena"
    },
    {
      text: "wyprzedaż"
    }
  ];
  const showComponent = title => {
    const titleOfFilter = (
      <h1 className="filter__sort-options_title">{title}</h1>
    );

    const HandleShowSizeElements = () => {
      return sizes.map((size, index) => (
        <span className="size__element" key={index}>
          {size.number}
        </span>
      ));
    };

    const HandleShowSortOptions = () => {
      return sortOptions.map((option, index) => (
        <span className="sorting__element" key={index}>
          {option.text}
        </span>
      ));
    };

    if (activeCategory === "sortuj")
      return (
        <div className="sorting">
          {titleOfFilter}
          {HandleShowSortOptions()}
        </div>
      );
    else if (activeCategory === "rozmiar")
      return (
        <>
          {titleOfFilter}
          <div className="size">{HandleShowSizeElements()}</div>
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
            <span className="fas fa-angle-right filter__element-icon"></span>
          </div>
          <div
            className="filter__size filter__element"
            onClick={() => useActiveCategory("rozmiar")}
          >
            rozmiar
            <span className="fas fa-angle-right filter__element-icon"></span>
          </div>
          <div
            className="filter__bussines filter__element"
            onClick={() => useActiveCategory("marka")}
          >
            marka
            <span className="fas fa-angle-right filter__element-icon"></span>
          </div>
          <div className="filter__price filter__element">
            cena
            <input type="range" className="filter__price-input_scope" />
            <label className="filter__price-promotion">
              <input type="checkbox" className="filter__price-check" /> tylko
              promocje
            </label>
            <div className="filter__price-scope">40zł-5539zł</div>
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
