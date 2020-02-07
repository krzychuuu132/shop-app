import React from "react";
import "../../sass/main/MoreInfo.scss";

const MoreInfo = () => {
  return (
    <>
      <div className="main__more">
        <p className="main__more-text">load more</p>
      </div>
      <div className="main__advert">
        <h1 className="main__advert-title">stylish clothes</h1>
        <p className="main__advert-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur blandit risus sed maximus.Praesent cursus libero eleifend.{" "}
        </p>
        <span className="main__advert-link">shop now</span>
        <div className="main__advert-img">
          <img
            src="/img/advert_product.png"
            alt="advert picture"
            className="main__advert-picture"
          />
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
