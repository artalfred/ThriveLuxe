import React from "react";

import hero_1 from "../image/Hero/hero_1.png";
import hero_2 from "../image/Hero/hero_2.png";
import hero_3 from "../image/Hero/hero_3.png";
import ads from "../image/Hero/ads.png";
import MainButton from "./Reusable/MainBtn";
import Trending from "./Trending";
import { Link } from "react-router-dom";

export default function Hero({ textBtn }) {
  return (
    <div className="container-xxl mt-5">
      <div className="row gy-4 w-100 mx-0">
        <div className="col-12 col-md-7 col-lg-7 px-0 pe-3 pad_none margin_none">
          <div className="card border-0 hidden_767">
            <img className="card-img-top rounded-0" src={hero_1} alt="Title" />
          </div>
          <h1 className="display-4 fw-bold" style={{ marginTop: "2.6rem" }}>
            Elevate your Look <br />
            With Our Bags.
          </h1>
          <p className="show_767">
            Welcome toThriveLuxe. The Ultimate Destination for new generation.
          </p>
        </div>
        <div className="col-12 col-md-5 col-lg-5 px-0 ps-3 pad_none">
          <div className="card border-0">
            <img className="card-img-top rounded-0" src={hero_2} alt="Title" />
          </div>

          <div className="margin_none" style={{ marginTop: "2.6rem" }}>
            <p className="hidden_991">
              Empowering styles for the modern woman. Discover fashion that
              celebrates confidence, individuality, and timeless elegance.
              Explore chic dresses, sophisticated workwear, and statement pieces
              that inspire.
            </p>

            <Link to="/women" reloadDocument>
              <MainButton btnType="main-button">Shop Now</MainButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="ads mb-5" style={{ marginTop: "6rem" }}>
        <div className="card border-0 position-relative">
          <img
            className="card-img-top rounded-0 hidden_767"
            src={ads}
            alt="ads"
          />

          <img
            className="card-img-top rounded-0 show_767"
            src={hero_3}
            alt="ads"
          />

          <div className="ads__btn p-5">
            <h5 className="fw-bold display-6">Bag & Beyond</h5>
            <p className="margin_none">
              Stylish women's bags for every occasion. Elevate your accessory
              game with our curated collection.
            </p>
            <MainButton btnType="main-button">Read More</MainButton>
          </div>
        </div>
      </div>

      <Trending title="Trending" title_secondary="Now" />
    </div>
  );
}
