import React from "react";
import styles from "./Hero.css";
import logo from "../../images/image.png";

export const Hero = () => {
  console.log( styles );
  return (
    <section>
      <div className="container">
        <div className={[ "hero_title" ]}>
          <div className={[ "title-name" ]}>
            <h1>Quality cleaning for your home</h1>
            <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <div className={[ "title-button" ]}>
              <button><a href="https://t.me/norboyev_oo4">Get a free quote</a></button>
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                <g clip-path="url(#clip0_1_38)" filter="url(#filter0_d_1_38)">
                  <path d="M46 77.5C65.6061 77.5 81.5 61.6061 81.5 42C81.5 22.3939 65.6061 6.5 46 6.5C26.3939 6.5 10.5 22.3939 10.5 42C10.5 61.6061 26.3939 77.5 46 77.5Z" fill="white" stroke="#DCDDEB" />
                  <path d="M57.0856 59.3845C57.0732 59.3845 57.0609 59.3845 57.0485 59.3845C51.11 59.19 44.1529 53.4336 39.3595 48.6371C34.5599 43.8407 28.8035 36.8805 28.6183 30.9698C28.5504 28.8956 33.6402 25.2072 33.6926 25.1701C35.0137 24.2504 36.4798 24.5775 37.0817 25.4109C37.4891 25.9757 41.3473 31.8216 41.767 32.4853C42.2022 33.1736 42.1374 34.1983 41.5942 35.2261C41.2948 35.7971 40.3009 37.5441 39.8349 38.359C40.338 39.075 41.6683 40.8313 44.4153 43.5783C47.1654 46.3253 48.9186 47.6587 49.6377 48.1618C50.4526 47.6957 52.1996 46.7019 52.7706 46.4025C53.7829 45.8654 54.8015 45.7975 55.496 46.2235C56.2059 46.6587 62.0364 50.5354 62.5734 50.9088C63.0241 51.2268 63.3142 51.77 63.3728 52.4027C63.4284 53.0416 63.2309 53.7176 62.8204 54.3071C62.7864 54.3565 59.1412 59.3845 57.0856 59.3845Z" fill="#0075FF" />
                </g>
                <defs>
                  <filter id="filter0_d_1_38" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0 0.168627 0 0 0 0.04 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_38" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_38" result="shape" />
                  </filter>
                  <clipPath id="clip0_1_38">
                    <rect width="72" height="72" fill="white" transform="translate(10 6)" />
                  </clipPath>
                </defs>
              </svg>
              <div className={[ "contak-number" ]}>
                <h3>Call us now</h3>
                <a href="https://t.me/norboyev_oo4">(414) 567 - 2109</a>
              </div>
            </div>
          </div>
          <div className={[ "title-image" ]}>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
