import React from "react";
import Product from "./Product";
import PathInfo from "../sex_categories/pathInfo";
import Product_filters from "../sex_categories/Product_filters";

const Mans = () => {
  return (
    <>
      <PathInfo />
      <Product_filters sex={"mens"} />
    </>
  );
};

export default Mans;
