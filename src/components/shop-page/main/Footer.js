import React from "react";
import "../../sass/main/Footer.scss";

const Footer = () => {

  const footerData = [
      {
        title:"urban shop",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar suscipit nulla, vitae auctor magna volutpat ac. Suspendisse id dolor tortor. Aliquam eu mi facilisis, feugiat nulla vel, euismod tortor."
      },
      {
        title:"follow us",
        text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar suscipit nulla."
      },
      {
        title:"contact us",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar suscipit nulla, vitae auctor magna volutpat ac. Suspendisse id dolor tortor."
      }

  ];

  const footerInformations = [
    {
      title:"Information",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    },
    {
      title:"Service",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    },
    {
      title:"Extras",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    },
    {
      title:"My Account",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    },
    {
      title:"Userful Links",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    },
    {
      title:"Our Offers",
      text_one:"About Us",
      text_two:"Information",
      text_three:"Privacy Policy",
      text_four:"Terms Conditions",
    }
  ];
  return (
    <>
    <div className="footer__elements">
      
   {

     footerData.map((item,index)=> (
      <div className="footer__element" key={index}>
        <h1 className="footer__element-title">{item.title}</h1>
        <p className="footer__element-text">
          {item.text}
        </p>
    </div>
     ))

   }
      </div>
      <div className="footer__informations">
        {
        footerInformations.map((item,index)=>(
            <div className="footer__information" key={index}>
              <h3 className="footer__informations-title">{item.title}</h3>
              <p className="footer__informations-text">{item.text_one}</p>
              <p className="footer__informations-text">{item.text_two}</p>
              <p className="footer__informations-text">{item.text_three}</p>
              <p className="footer__informations-text">{item.text_four}</p>
            </div>
          ))
        }
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
