import React from "react";
import "../../sass/menu-options/WishList.scss";

const WishList = () => {
  return (
    <div className="wish-list">
      <div class="wish-list__content">
        <h1 className="wish-list__title">moja lista życzeń</h1>
      </div>
      <div className="wish-list__products"></div>
    </div>
  );
};

export default WishList;
