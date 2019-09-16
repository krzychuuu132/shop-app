import React, { useState, useRef } from "react";
import "../../sass/main/SearchProducts.scss";

const SearchProducts = () => {
  const [active, useActive] = useState(false);

  const divSearch = useRef(null);

  return (
    <>
      <section className="search">
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
        </div>
      </section>
    </>
  );
};

export default SearchProducts;
