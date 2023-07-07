import React from "react";

import men_9 from "../image/Men/men_9/1.jpg";
import men_9_2 from "../image/Men/men_9/4.jpg";
import MainButton from "./Reusable/MainBtn";
import { Link } from "react-router-dom";

export default function Trending({ title, title_secondary }) {
  return (
    <div className="trending">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <h1 className="display-4  fw-bold">
            {title} <br /> {title_secondary}
          </h1>

          <div className="card border-0 mt-4 show_767">
            <img
              className="card-img-top rounded-0"
              src={men_9_2}
              alt="men_9_2"
            />
          </div>

          <div className="d-flex gap-5 justify-content-between mt-5">
            <h6 className="fw-semibold">
              Premium Threads Raglan T-Shirt With Shoulder Stripes
            </h6>

            <span className="fw-semibold">₱399</span>
          </div>

          <p className="f-sm py-2 margin_none">
            Vintage-inspired AF-1 with crisp leather, checked pattern details.
            Effortlessly stylish, perfect for any outfit.
          </p>

          <Link to="/men" reloadDocument>
            <MainButton btnType="main-button">Shop Now</MainButton>
          </Link>
        </div>

        <div className="col-12 col-md-6 col-lg-4 hidden_991">
          <div className="card border-0">
            <img className="card-img-top rounded-0" src={men_9} alt="men_9" />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 hidden_767">
          <div className="card border-0">
            <img
              className="card-img-top rounded-0"
              src={men_9_2}
              alt="men_9_2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
