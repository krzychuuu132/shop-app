import React, { useState } from "react";
import { useHistory,useLocation } from "react-router-dom";
import "../../sass/main/MoreInfo.scss";

const MoreInfo = () => {
  const history = useHistory();
  const location = useLocation().pathname;
  const [text, setText] = useState(false);

 

  return (
    <>
      <div className="main__more">
        <p
          className="main__more-text"
          onClick={() => {
            const products = document.querySelectorAll(".product");
            if (location === "/mainSide/home/All") {
              products.forEach((product) => {
                product.classList.toggle("product--hidden");
              });
              setText(!text);
            }
            if (text) window.scrollTo(0, 700);
          }}
        >
          {text ? "load less" : "load more"}
        </p>
      </div>
      <div className="main__advert">
        <h1 className="main__advert-title">stylish clothes</h1>
        <p className="main__advert-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur blandit risus sed maximus.{" "}
        </p>
        <span
          className="main__advert-link"
          onClick={() => {
            history.push("/mainSide/girls/T-shirt");
            window.scrollTo(0, 0);
          }}
        >
          shop now
        </span>
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
