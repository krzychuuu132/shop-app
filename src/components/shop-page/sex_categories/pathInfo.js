import React from "react";
import "../../sass/sex_categories/pathInfo.scss";

const PathInfo = () => {
  const pageLocation = window.location.pathname;

  const space = pageLocation.split();
  //console.log(space);
  return (
    <section className="section">
      <p className="section__path">{pageLocation.toLowerCase()}</p>
    </section>
  );
};

export default PathInfo;
