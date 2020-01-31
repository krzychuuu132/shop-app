import React from "react";
import { Route } from "react-router-dom";
import Girls from "./Girls";
import Mens from "./Mens";
import Kids from "./Kids";

const Products = () => {
  return (
    <>
      <Route path="/mainSide/girls" component={Girls}></Route>
      <Route path="/mainSide/mens" component={Mens}></Route>
      <Route path="/mainSide/kids" component={Kids}></Route>
    </>
  );
};

export default Products;
