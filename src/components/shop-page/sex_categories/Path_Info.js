import React from "react";
import "../../sass/sex_categories/Path_Info.scss";

const PathInfo = props => {
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
