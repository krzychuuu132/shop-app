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
  const _sizes = [
    {
      id: 0,
      number: 36,
      className: "size__element"
    },
    {
      id: 1,
      number: 37,
      className: "size__element"
    },
    {
      id: 2,
      number: 38,
      className: "size__element"
    },
    {
      id: 3,
      number: 39,
      className: "size__element"
    },
    {
      id: 4,
      number: 40,
      className: "size__element"
    }
  ];
  const sortOptions = [
    {
      text: "popularność",
      id: 0,
      className: "sorting__element"
    },
    {
      text: "nowości",
      id: 1,
      className: "sorting__element"
    },
    {
      text: "najniższa cena",
      id: 2,
      className: "sorting__element"
    },
    {
      text: "najwyższa cena",
      id: 3,
      className: "sorting__element"
    },
    {
      text: "wyprzedaż",
      id: 4,
      className: "sorting__element"
    }
  ];

  const _markOptions = [
    {
      id: 0,
      text: "puma",
      className: "mark__element"
    },
    {
      id: 1,
      text: "adidas",
      className: "mark__element"
    },
    {
      id: 2,
      text: "nike",
      className: "mark__element"
    },
    {
      id: 3,
      text: "Armani",
      className: "mark__element"
    },
    {
      id: 4,
      text: "new balance",
      className: "mark__element"
    },
    {
      id: 5,
      text: "Calvin klein",
      className: "mark__element"
    },
    {
      id: 6,
      text: "Lacoste",
      className: "mark__element"
    }
  ];
  const exitElement = useRef(null);
  const exitElementContent = useRef(null);

  const showComponent = title => {
    const titleOfFilter = (
      <h1 className="filter__sort-options_title">{title}</h1>
    );

    // Universal Functions
    const handleSaveOptions = (type, option) => {
      option.className = `${type}__element ${type}__element--active`;
      exitElement.current.style.backgroundColor = "orange";
      exitElementContent.current.innerText = "zapisz";
    };

    const handleCloseOptions = (type, stateTable, useStateTable) => {
      const copyTable = stateTable.map(element => element);

      const activeElement = copyTable.filter(
        element => (element.className = `${type}__element`)
      );
      exitElement.current.style.backgroundColor = "black";
      exitElementContent.current.innerText = "zamknij";
      useStateTable(activeElement);
    };

    // SORTING
    const [activeSortElement, useActiveSortElement] = useState(sortOptions);

    const handleSortClick = index => {
      const element = activeSortElement.filter(option => {
        if (option.id === index) {
          handleSaveOptions("sorting", option);

          return option;
        } else {
          option.className = "sorting__element";

          return option;
        }
      });

      useActiveSortElement(element);
    };

    const handleClearSorting = () => {
      handleCloseOptions("sorting", activeSortElement, useActiveSortElement);
    };

    const HandleShowSortOptions = () => {
      return activeSortElement.map((option, index) => (
        <span
          className={option.className}
          key={index}
          onClick={() => handleSortClick(index)}
        >
          {option.text}
        </span>
      ));
    };

    // SIZE

    const [activeSizeElement, useActiveSizeElement] = useState(_sizes);

    const handleClearSizing = () => {
      handleCloseOptions("size", activeSizeElement, useActiveSizeElement);
    };

    const handleSizeClick = index => {
      const activeSort = activeSizeElement.filter(element => {
        if (element.id === index) {
          handleSaveOptions("size", element);
        } else {
          element.className = "size__element";
        }
        return element;
      });

      useActiveSizeElement(activeSort);
    };

    const HandleShowSizeElements = () => {
      return activeSizeElement.map((size, index) => (
        <span
          className={size.className}
          key={index}
          onClick={() => handleSizeClick(index)}
        >
          {size.number}
        </span>
      ));
    };
    // MARKS

    const [activeMarkElement, useActiveMarkElement] = useState(_markOptions);

    const handleMarkClick = index => {
      const activeMark = activeMarkElement.filter(element => {
        if (element.id === index) {
          handleSaveOptions("mark", element);
        } else {
          element.className = "mark__element";
        }
        return element;
      });
      useActiveMarkElement(activeMark);
    };

    const handleClearMark = () => {
      handleCloseOptions("mark", activeMarkElement, useActiveMarkElement);
    };
    if (activeCategory === "sortuj")
      return (
        <div className="sorting">
          {titleOfFilter}

          <span className="sorting__clear" onClick={handleClearSorting}>
            wyczyść
          </span>

          {HandleShowSortOptions()}
        </div>
      );
    // SIZE
    else if (activeCategory === "rozmiar")
      return (
        <>
          {titleOfFilter}
          <div className="size">
            {HandleShowSizeElements()}
            <span
              className="sorting__clear size__clear"
              onClick={handleClearSizing}
            >
              wyczyść
            </span>
          </div>
        </>
      );
    // MARK
    else if (activeCategory === "marka")
      return (
        <>
          {titleOfFilter}
          <div className="mark">
            {activeMarkElement.map((mark, index) => (
              <span
                className={mark.className}
                key={index}
                onClick={() => handleMarkClick(index)}
              >
                {mark.text}
              </span>
            ))}
            <span
              className="sorting__clear size__clear"
              onClick={handleClearMark}
            >
              wyczyść
            </span>
          </div>
        </>
      );
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

            <div
              className={"filter__exit"}
              ref={exitElement}
              onClick={() => {
                if (exitElement.current.style.backgroundColor === "orange") {
                  return useActive(!active);
                } else null;
              }}
            >
              <h3 className="filter__exit-item" ref={exitElementContent}>
                zamknij
              </h3>
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
