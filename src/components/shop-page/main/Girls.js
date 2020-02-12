import React from "react";
import Product from "./Product";
import Main from "./Main";
import PathInfo from "../sex_categories/pathInfo";
import Product_filters from "../sex_categories/Product_filters";

const Girls = () => {
  return (
    <>
      <PathInfo />
      <Product_filters sex={"girls"} />
    </>
  );
};

export default Girls;
