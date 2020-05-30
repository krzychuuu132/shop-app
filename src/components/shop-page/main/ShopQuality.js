import React from "react";
import "../../sass/main/ShopQuality.scss";

const ShopQuality = () => {

  const serviceElements = [
   { 
     className:"fas fa-shipping-fast service__icon" ,
     title:"free shipping",
     text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur blandit risus sed maximus. Praesent cursus libero eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam quis lacus venenatis aliquam."
  
   },
   { 
    className:"fas fa-sync service__icon" ,
    title:"100% refund",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur blandit risus sed maximus. Praesent cursus libero eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam quis lacus venenatis aliquam."
 
  },
  { 
    className:"fas fa-headset service__icon" ,
    title:"support 24/7",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur blandit risus sed maximus. Praesent cursus libero eleifend, luctus quam sit amet, volutpat est. Nullam vehicula quam quis lacus venenatis aliquam."
 
  }
  ]
  
  return (
     <section className="quality">

      {
            serviceElements.map((serviceElement,index)=>(

              <div className="service" key={index}>

                <span className={serviceElement.className}></span>
                <span className="service__title">{serviceElement.title}</span>
                <p className="service__text">{serviceElement.text}</p>

              </div>

            ))
        }
       
      </section>
    
  );
};

export default ShopQuality;
