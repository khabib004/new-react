import React from "react";
import styles from "./Services.css";


import logotip from "../../images/frameibno.png";
import logo from "../../images/framefout.png";
import kan from "../../images/framehoome.png";


// import logo from "../../assets/logo192.png";

export const Services = () => {
  console.log( styles );
  return (
    <section>
      <div className="container">
        <div className={[ "services" ]}>  
          <div className={[ "services-name" ]}>
            <h1>Our Services</h1>
            <a href="https://t.me/norboyev_oo4">Explore services</a>
          </div>
          <div className={[ "about-card" ]}>
            <div className={[ "about-cardst" ]}>
              <img src={kan} alt="" />
              <h1>House cleaning</h1>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className={[ "about-cardst" ]}>
              <img src={logotip} alt="" />
              <h1>Office cleaning</h1>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className={[ "about-cardst" ]}>
              <img src={logo} alt="" />
              <h1>Industrial cleaning</h1>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
