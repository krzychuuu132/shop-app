import React from "react";
import { Link } from "react-router-dom";

const Mans = props => {
  //props.useActive(false);
  console.log(Boolean(props.showClothes("mans")));
  return <>{props.showClothes("mans")}</>;
};

export default Mans;
