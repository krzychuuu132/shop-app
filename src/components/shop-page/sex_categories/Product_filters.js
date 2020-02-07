import React from "react";
import "../../sass/sex_categories/Product_filters.scss";

const Product_filters = () => {
  return (
    <div className="filters">
      <div className="filters__categories">
        <ul>
          <li>buty</li>
          <li>t-shirty</li>
          <li>bluzy</li>
          <li>kurtki</li>
          <li>spodnie</li>
        </ul>
      </div>
      <div className="filters__banner"></div>
    </div>
  );
};

export default Product_filters;
