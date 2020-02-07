import React from "react";
import "../../sass/main/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__elements">
        <div className="footer__element">
          <h1 className="footer__element-title">urban shop</h1>
          <p className="footer__element-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pulvinar suscipit nulla, vitae auctor magna volutpat ac. Suspendisse
            id dolor tortor. Aliquam eu mi facilisis, feugiat nulla vel, euismod
            tortor.
          </p>
        </div>
        <div className="footer__element">
          <h5 className="footer__element-info">follow us</h5>
          <p className="footer__element-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pulvinar suscipit nulla.
          </p>
          <p className="footer__element-media">
            <span className="fab fa-facebook-f footer__element-icons"></span>
            <span className="fab fa-twitter footer__element-icons"></span>
          </p>
        </div>
        <div className="footer__element">
          <h5 className="footer__element-info">contact us</h5>
          <p className="footer__element-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pulvinar suscipit nulla, vitae auctor magna volutpat ac. Suspendisse
            id dolor tortor.{" "}
          </p>
        </div>
      </div>
      <div className="footer__informations">
        <div className="footer__information">
          <h3 className="footer__informations-title">Information</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
        <div className="footer__information">
          <h3 className="footer__informations-title">Service</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
        <div className="footer__information">
          <h3 className="footer__informations-title">Extras</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
        <div className="footer__information">
          <h3 className="footer__informations-title">My Account</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
        <div className="footer__information">
          <h3 className="footer__informations-title">Userful Links</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
        <div className="footer__information">
          <h3 className="footer__informations-title">Our Offers</h3>
          <p className="footer__informations-text">About Us</p>
          <p className="footer__informations-text">Information</p>
          <p className="footer__informations-text">Privacy Policy</p>
          <p className="footer__informations-text">Terms {"&"}Conditions</p>
        </div>
      </div>
      <div className="footer__payment">
        <span className="fab fa-cc-mastercard footer__payment-icon"></span>
        <span className="fab fa-cc-paypal footer__payment-icon"></span>
        <span className="fab fa-cc-visa footer__payment-icon"></span>
        <span className="fab fa-cc-amex footer__payment-icon"></span>
      </div>
    </>
  );
};

export default Footer;
