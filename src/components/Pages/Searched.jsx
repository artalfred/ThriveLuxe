import { useParams } from "react-router";
import Header from "../Header";
import NewApi from "../../Api";
import { Link } from "react-router-dom";
import placeholder from "../../image/placeholder.png";
import { useEffect } from "react";

export default function Searched({ totalItems }) {
  const params = useParams();

  const search = params.search.toLocaleLowerCase();

  const filteredProducts = NewApi.filter((item) => {
    if (
      item.category?.toLocaleLowerCase() === search ||
      item.name?.toLocaleLowerCase().includes(search)
    ) {
      return true;
    } else {
      return false;
    }
  });
  const results = filteredProducts.length;

  return (
    <div>
      <Header totalItems={totalItems} />
      <div className="container-xxl mt-5">
        <div className="row g-3 newArrivals" style={{ marginTop: "2rem" }}>
          <p className="f-sm border-bottom pb-5">
            Home / Search {results} results found for "{search}"
          </p>
          <div>
            <h2 className="mt-3" style={{ fontWeight: "900" }}>
              {results} results
            </h2>

            {results === 0 ? (
              <div>
                <p className="f-sm mt-4">
                  Your search for "{search}" did not yield any results.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          {filteredProducts.map((item) => {
            return (
              <div className="mt-3 col-6 col-md-4 col-lg-3" key={item.id}>
                <Link
                  reloadDocument
                  to={`/product/${item.url}-id=/${item.id}`}
                  className="text-decoration-none text-dark searchProducts"
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
        </div>
      </div>
    </div>
  );
}
