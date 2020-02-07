import React from "react";
import "../../sass/main/ShopQuality.scss";

const ShopQuality = () => {
  return (
    <>
      <section className="quality">
        <div className="service">
          <span className="fas fa-shipping-fast service__icon"></span>
          <span className="service__title">free shipping</span>

          <p className="service__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur blandit risus sed maximus. Praesent cursus libero
            eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam
            quis lacus venenatis aliquam.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-sync service__icon"></i>
          <span className="service__title">100% refund</span>

          <p className="service__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur blandit risus sed maximus. Praesent cursus libero
            eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam
            quis lacus venenatis aliquam.
          </p>
        </div>
        <div className="service">
          <span className="fas fa-headset service__icon"></span>

          <span className="service__title">support 24/7</span>

          <p className="service__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur blandit risus sed maximus. Praesent cursus libero
            eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam
            quis lacus venenatis aliquam.
          </p>
        </div>
      </section>
    </>
  );
};

export default ShopQuality;
