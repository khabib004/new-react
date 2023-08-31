import React from "react";
import styles from "./About.css";
import logotip from "../../images/IMAGE-karta.png";
import logo from "../../images/IMAGE-pele.png";
import kan from "../../images/kankulyator.png";





export const About = () => {
  console.log( styles );
    return (
      <section>
        <div className="container">
          <div className={["about-page"]}>
            <div className={["about-name"]}>
              <h1>About</h1>
              <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <div className={[ "about-card" ]}>
              <div className={[ "about-cards" ]}>
                <img src={kan} alt="" />
                <h1>1. Schedule online</h1>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
              </div>
              <div className={[ "about-cards" ]}>
                <img src={logotip} alt="" />
                <h1>2. Pay online easily</h1>
                <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
              </div>
              <div className={[ "about-cards" ]}>
                <img src={logo} alt="" />
                <h1>3. Get your house cleaned</h1>
                <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
              </div>
            </div>
            <div className={[ "button-frame" ]}>
              <button className={[ "button-quate" ]}><a href="https://t.me/norboyev_oo4">Get a free quote</a></button>
              <button className={[ "button-services" ]}><a href="https://t.me/norboyev_oo4">Explore services</a></button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
