import React, { useRef } from "react";
import NewApi from "../Api";
import { Link } from "react-router-dom";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function Feature() {
  const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="featured" style={{ marginTop: "8rem" }}>
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
          <button
            className="border-0 p-2 featured__btn"
            style={{ background: "transparent" }}
            onClick={handleNext}
          >
            <ArrowBackIosNewOutlinedIcon />
          </button>

          <button
            className="border-0 p-2 featured__btn"
            style={{ background: "transparent" }}
            onClick={handlePrev}
          >
            <ArrowForwardIosOutlinedIcon />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="featured__items gap-4 mt-5">
        {NewApi.slice(0, 8).map((item) => {
          return (
            <Link
              key={item.id}
              reloadDocument
              to={`/product/${item.url}=/${item.id}`}
              style={{ height: "54rem", padding: "0rem" }}
              className={`text-decoration-none text-dark ${
                item.id === 7 ? "margin-right" : ""
              }`}
            >
              <div className="" style={{ width: "20rem" }}>
                <div style={{ height: "30rem" }}>
                  <img
                    src={item.image}
                    alt="img-1"
                    style={{ height: "inherit" }}
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
  );
}
