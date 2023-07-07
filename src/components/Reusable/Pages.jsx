import { Link } from "react-router-dom";
import { useState } from "react";
import placeholder from "../../image/placeholder.png";

export default function Pages({
  ApiProduct,
  sortedSliceFirst,
  sortedSliceSecond,
  title,
  description,
}) {
  const [sortBy, setSortBy] = useState("sort");
  const Api = ApiProduct.slice(sortedSliceFirst, sortedSliceSecond);

  //TO SORTTHE ITEMS DEPENDSON THE OPTION
  let sortedByItems;

  if (sortBy === "sort") {
    sortedByItems = Api;
  }

  if (sortBy === "Alphabetically") {
    sortedByItems = Api.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "lowToHigh") {
    sortedByItems = Api.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (sortBy === "highToLow") {
    sortedByItems = Api.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <div className="container-xxl">
      <div className="row my-5 gx-4 gy-5 mt-2 newArrivals">
        <div className="d-grid align-items-center justify-content-center">
          <h1
            className="mt-4 display-4 text-center"
            style={{ fontWeight: "800", maxWidth: "50rem" }}
          >
            {title}
          </h1>
          <div className="d-flex justify-content-center">
            <p className="f-sm text-center mt-2" style={{ maxWidth: "45rem" }}>
              {description}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <select
            className="form-select rounded-0 border text-dark f-sm"
            aria-label="Default select example"
            style={{
              maxWidth: "14rem",
              boxShadow: "none",
              padding: ".7rem 1rem",
            }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="sort">Sort</option>
            <option value="Alphabetically">Alphabetically, A-Z </option>
            <option value="lowToHigh">Price, low to high</option>
            <option value="highToLow">Price, high to low</option>
          </select>
        </div>

        {sortedByItems.map((item) => {
          return (
            <div className="mt-5 col-6 col-md-4 col-lg-3" key={item.id}>
              <Link
                reloadDocument
                to={`/product/${item.url}-id=/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0">
                  {item.image ? (
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top rounded-0"
                      />
                      <div className="d-grid align-items-center justify-content-between mt-4">
                        <h6 className="mb-0 fw-normal">{item.name}</h6>
                        <span className="mt-1">₱{item.price}.00</span>
                      </div>
                    </div>
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
              </Link>
            </div>
          );
        })}

        <div
          className="d-flex align-items-center gap-4 justify-content-center"
          style={{ paddingTop: "4rem" }}
        >
          <Link
            className="page-link border-0 rounded-0"
            style={{ boxShadow: "none", color: "#999" }}
          >
            1
          </Link>
          <Link
            className="page-link text-dark border-0"
            style={{ boxShadow: "none" }}
          >
            2
          </Link>
          <Link
            className="page-link text-dark border-0"
            style={{ boxShadow: "none" }}
          >
            3
          </Link>
          <Link
            className="page-link text-dark border-0"
            style={{ boxShadow: "none" }}
          >
            ...
          </Link>
          <Link
            className="page-link text-dark border-0"
            style={{ boxShadow: "none" }}
          >
            10
          </Link>

          <Link className="page-link rounded-circle p-2 border-0 bg-dark">
            <span className="d-flex arrow">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
