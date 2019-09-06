import React, { PropTypes } from "react";
import { creteStore } from "redux";
import { connect, Provider } from "react-redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "active":
      return { ...state, active: !state.active };
    case "inactive":
      return { ...state, active: !state.active };
    default:
      return state;
  }
};

const store = creteStore(reducer, { active: false });

export default Active;
