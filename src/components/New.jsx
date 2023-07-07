import React from "react";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import NewApi from "../Api";
import { Link } from "react-router-dom";

export default function New() {
  return (
    <div className="new">
      <div className="container-xxl d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center new__title">
          <h1 className="display-4 fw-bold">New Arrival</h1>
          <p className="f-sm pb-0 mb-0 new__description">
            Vintage-inspired AF-1 with crisp leather, checked pattern details.
            <br />
            Effortlessly stylish, perfect for any outfit.
          </p>
        </div>

        <div className="d-flex gap-2 new__btn">
          <button className="border p-2" style={{ background: "transparent" }}>
            <ArrowBackIosNewOutlinedIcon />
          </button>
          <p className="f-sm fw-semibold mb-0 d-flex align-items-center">
            1 / 12
          </p>
          <button className="border p-2" style={{ background: "transparent" }}>
            <ArrowForwardIosOutlinedIcon />
          </button>
        </div>
      </div>

      <div className="new__hot overflow-x-auto mt-5">
        <div className="d-flex gap-4">
          {NewApi.slice(0, 8).map((item, index) => {
            return (
              <Link
                reloadDocument
                to={`/product/${item.url}-id=/${item.id}`}
                key={index}
                className="text-decoration-none"
              >
                <div
                  className={`card border-0 ${
                    index >= 7 ? "margin-right" : ""
                  }`}
                >
                  <div className="card border-0">
                    <img
                      className="new__img"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <h6 className="mb-0 fw-semibold">{item.name}</h6>
                    <span className=" fw-semibold">₱{item.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
