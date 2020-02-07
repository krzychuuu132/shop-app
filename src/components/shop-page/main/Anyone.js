import React from "react";
import Product from "./Product";
import Main from "./Main";
import SearchProducts from "./SearchProducts";
import MoreInfo from "./MoreInfo";
import ShopQuality from "./shopQuality";

const Anyone = () => {
  const sexChoice = [
    {
      id: 0,
      type: "dla niej",
      path: "/mainSide/girls",
      class: "search__name"
    },
    {
      id: 1,
      type: "dla niego",
      path: "/mainSide/mens",
      class: "search__name"
    },
    {
      id: 2,
      type: "dla dziecka",
      path: "/mainSide/kids",
      class: "search__name"
    }
  ];
  return (
    <>
      <Main />
      <SearchProducts sexChoice={sexChoice} />
      <Product type={""} />
      <MoreInfo />
      <ShopQuality />
    </>
  );
};

export default Anyone;
