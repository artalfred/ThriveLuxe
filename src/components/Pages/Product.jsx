import React, { useState } from "react";
import { useParams } from "react-router";
import NewApi from "../../Api";
import MainButton from "../Reusable/MainBtn";
import Featured from "../Reusable/Featured";
import { Link } from "react-router-dom";
import checked from "../../image/Icon/checked.png";
import placeholder from "../../image/placeholder.png";
import Header from "../Header";

const Sizes = [
  {
    id: "S",
    sizeName: "small",
  },
  {
    id: "M",
    sizeName: "Medium",
  },
  {
    id: "L",
    sizeName: "Large",
  },
  {
    id: "XL",
    sizeName: "Extra Large",
  },
];

export default function Product({
  onAddItems,
  totalItems,
  quantity,
  setQuantity,
  item,
  setItem,
}) {
  const params = useParams();

  const [clicked, setClicked] = useState("img1");
  const [img, setImg] = useState(NewApi[params.id].image);
  const [size, setSize] = useState("");

  function handleClicked(id) {
    setClicked(id);

    if (id === "img1") {
      setImg(NewApi[params.id]?.image);
    } else if (id === "img2") {
      setImg(NewApi[params.id].image_2);
    } else if (id === "img3") {
      setImg(NewApi[params.id]?.image_3);
    } else if (id === "img4") {
      setImg(NewApi[params.id]?.image_4);
    }
  }

  function handleSize(id) {
    setSize(id);

    if (id === "small") {
      setSize("S");
    } else if (id === "medium") {
      setSize("M");
    } else if (id === "large") {
      setSize("L");
    } else if (id === "extraLarge") {
      setSize("XL");
    }
  }

  function handleAdd(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: NewApi[params.id].name,
      price: NewApi[params.id].price,
      size,
      quantity,
      image: NewApi[params.id].image,
    };
    // onAddItems(newItem);
    // setSize("");

    const existingItem = item.find((item) => item.size === size);
    if (existingItem) {
      // Product with the same size already exists, increase the quantity
      const updatedItems = item.map((item) => {
        if (item.size === size) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setItem(updatedItems);
    } else {
      // Product with the same size doesn't exist, add a new item
      setItem((prevItems) => [...prevItems, newItem]);
    }

    setSize("");
  }

  return (
    <div>
      <Header totalItems={totalItems} />
      <div className="container-xxl mt-5">
        <div className="product row g-3">
          <p className="pb-2" style={{ color: "#1c1d1d", fontSize: "13px" }}>
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>{" "}
            / Product / {NewApi[params.id].name}
          </p>
          <div
            className="col-2 col-sm-2 col-md-1 col-lg-1 order-2 order-sm-2 order-md-1"
            style={{ marginTop: "17.9px" }}
          >
            <div className="d-grid gap-3 product__image">
              <div
                className={`card border-0 rounded-0 ${
                  clicked === "img1" ? "product__active" : "product__notActive"
                }`}
                id="img1"
                onClick={() => handleClicked("img1")}
              >
                <img
                  className="card-img-top rounded-0 product__cards"
                  src={NewApi[params.id].image}
                  alt="img"
                />
              </div>
              <div
                className={`card border-0 rounded-0 ${
                  clicked === "img2" ? "product__active" : "product__notActive"
                }`}
                id="img2"
                onClick={() => handleClicked("img2")}
              >
                <img
                  className="card-img-top rounded-0 product__cards"
                  src={NewApi[params.id].image_2}
                  alt="img"
                />
              </div>
              <div
                className={`card border-0 rounded-0 ${
                  clicked === "img3" ? "product__active" : "product__notActive"
                }`}
                id="img3"
                onClick={() => handleClicked("img3")}
              >
                <img
                  className="card-img-top rounded-0 product__cards"
                  src={NewApi[params.id].image_3}
                  alt="img"
                />
              </div>
              <div
                className={`card border-0 rounded-0 ${
                  clicked === "img4" ? "product__active" : "product__notActive"
                }`}
                id="img4"
                onClick={() => handleClicked("img4")}
              >
                {NewApi[params.id].image_4 ? (
                  <img
                    className="card-img-top rounded-0 product__cards"
                    src={NewApi[params.id].image_4}
                    alt="img"
                  />
                ) : (
                  <div className="position-relative">
                    <img src={placeholder} class="card-img-top" alt="..." />
                    <div
                      class="spinner-grow position-absolute top-50 start-50 translate-middle"
                      role="status"
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-10 col-sm-10 col-md-6 col-lg-6 order-1 order-sm-1 order-md-1">
            <div className="card border-0">
              <img className="card-img-top rounded-0" src={img} alt="img" />
            </div>
          </div>

          <div className="product__details col-md-5 col-lg-4 order-3 order-sm-3">
            {/* TITLE & PRICE */}
            <div className="border-bottom pb-4 product__title">
              <h2 className="display-6" style={{ fontWeight: "900" }}>
                {NewApi[params.id].name}
              </h2>
              <div className="d-flex align-items-center gap-2">
                <span className="star">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="star">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="star">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="star">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="star">
                  <ion-icon name="star"></ion-icon>
                </span>

                <p className="mb-0 f-sm">Reviews 45</p>
              </div>
              <h5 className="mt-3">₱{NewApi[params.id].price}.00</h5>
            </div>

            {/* SIZES */}
            <div className="border-bottom" style={{ padding: "2rem 0rem" }}>
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="f-sm fw-bold m-0">Size</h6>
              </div>

              <div className="row g-3 mt-3">
                {Sizes.map((item) => {
                  return (
                    <div className="col-auto" key={item.id}>
                      <button
                        className={`product__sizes f-sm border-0 ${
                          size === item.id ? "select__active" : ""
                        }`}
                        onClick={() => handleSize(item.id)}
                      >
                        {item.sizeName}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ADD TO BAG BUTTON */}
            <div className="pb-4">
              <div className="d-flex gap-3 justify-content-between align-items-center">
                <div className="d-grid w-100">
                  <p
                    className="f-sm d-flex align-items-center gap-2"
                    style={{ marginTop: "2rem", fontWeight: "500" }}
                  >
                    <span>
                      <img
                        style={{ height: "1.2rem" }}
                        src={checked}
                        alt="checked"
                      />
                    </span>
                    Premium Quality
                  </p>
                  <MainButton btnType="gray-Button" onClick={handleAdd}>
                    ADD TO BAG
                  </MainButton>
                </div>
                <span className="icons mt-4">
                  <ion-icon name="heart-outline"></ion-icon>
                </span>
              </div>

              <div className="accordion mt-4" id="accordionExample">
                <div className="accordion-item border-bottom border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button f-sm fw-semibold px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      PRODUCT DETAILS
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-0 pb-3">
                      <p className="f-sm">{NewApi[params.id].description}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed f-sm fw-semibold px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      MATERIAL
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-0 pb-3">
                      <p className="f-sm">{NewApi[params.id].description}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-0 rounded-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed f-sm fw-semibold px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      AVAILABILITY IN STORES
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-0 pb-3">
                      <p className="f-sm">{NewApi[params.id].description}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-bottom border-0 rounded-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed f-sm fw-semibold px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_4"
                      aria-expanded="false"
                      aria-controls="collapse_4"
                    >
                      REVIEWS (45)
                    </button>
                  </h2>
                  <div
                    id="collapse_4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-0 pb-3">
                      <p className="f-sm">{NewApi[params.id].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Featured />
      </div>
    </div>
  );
}
