import React, { useState } from "react";
import "../../sass/main/productFavourite.scss";

const ProductFavourite = () => {
  const [addToFavourite, useAddToFavourite] = useState(false);
  return (
    <div
      className={
        addToFavourite
          ? "product-favourite product-favourite--active"
          : "product-favourite"
      }
      onClick={() => useAddToFavourite(!addToFavourite)}
    >
      <span className="far fa-heart product-details__img-icon"></span>
    </div>
  );
};

export default ProductFavourite;
