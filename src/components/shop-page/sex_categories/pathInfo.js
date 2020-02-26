import React from "react";
import "../../sass/sex_categories/pathInfo.scss";

const PathInfo = props => {
  //console.log(space);
  return (
    <section className="section">
      <p className="section__path">
        <span className="section__path-details">Home</span>/
        <span className="section__path-details">{props.sex}</span>/
        <span className="section__path-category">{props.category}</span>
      </p>
    </section>
  );
};

export default PathInfo;
