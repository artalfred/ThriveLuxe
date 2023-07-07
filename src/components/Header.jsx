import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../image/logo.png";
import heart from "../image/Icon/heart.png";
import search from "../image/Icon/search.png";
import user from "../image/Icon/user.png";
import telephone from "../image/Icon/telephone.png";
import cart from "../image/Icon/cart.png";
import close from "../image/Icon/close.svg";
import hamburger from "../image/Icon/hamburger.png";
import MainButton from "./Reusable/MainBtn";

function Header({ totalItems, home, newArrival, latest, men, kid, women }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition >= 41) {
    document.querySelector(".nav").style.top = "-2.6rem";
  }

  function handleSubmit() {
    navigate("/searched/" + input);
    window.location.reload();
  }

  return (
    <div className="nav w-100 sticky-top" style={{ background: "#fff" }}>
      <header className="header border-bottom w-100">
        <div className="border-bottom hidden_991">
          <div
            className="d-flex align-items-center justify-content-between container-xl"
            style={{ height: "2.6rem" }}
          >
            <h6
              className="f-xsm text-center f-xsm m-0"
              style={{ letterSpacing: "2px" }}
            >
              Explore Our New Locations
            </h6>

            <ul className="d-flex gap-3 align-items-center m-0">
              <Link to="#" className="f-xsm border-end px-3 links">
                Join us
              </Link>
              <Link to="#" className="f-xsm links">
                Sign In
              </Link>
            </ul>
          </div>
        </div>

        <nav
          className="d-flex justify-content-between align-items-center position-relative container-xxl  nav"
          style={{ height: "4rem" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/" className="fw-bold">
              <img src={logo} alt="logo" className="nav__logo" />
            </Link>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="d-flex gap-5 justify-content-center align-items-center position-absolute top-50 start-50 translate-middle hidden_991">
            <Link
              to="/"
              className={`text-decoration-none text-dark f-xsm ${home}`}
              reloadDocument
            >
              HOME
            </Link>
            <Link
              to="/newArrival"
              className={`text-decoration-none text-dark f-xsm ${newArrival}`}
              reloadDocument
            >
              NEW ARRIVAL
            </Link>
            <Link
              to="/latest"
              className={`text-decoration-none text-dark f-xsm ${latest}`}
              reloadDocument
            >
              LATEST
            </Link>
            <Link
              to="/men"
              className={`text-decoration-none text-dark f-xsm ${men}`}
              reloadDocument
            >
              MEN
            </Link>
            <Link
              to="/kid"
              className={`text-decoration-none text-dark f-xsm ${kid}`}
              reloadDocument
            >
              KID
            </Link>
            <Link
              to="/women"
              className={`text-decoration-none text-dark f-xsm ${women}`}
              reloadDocument
            >
              WOMEN
            </Link>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <div className="d-flex gap-4">
              <div
                className="d-flex justify-content-center align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#search"
                aria-controls="search"
                style={{ cursor: "pointer" }}
              >
                <span className="d-flex justify-content-center">
                  <img src={search} alt="cart" className="icon" />
                </span>
              </div>

              <div>
                <Link to="/cart" reloadDocument>
                  <span className="d-flex justify-content-center position-relative">
                    <img src={cart} alt="cart" className="icon" />
                    {totalItems > 0 ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {totalItems}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </Link>
              </div>

              <div
                className="show_991"
                data-bs-toggle="offcanvas"
                data-bs-target="#sideBar"
                aria-controls="sideBar"
              >
                <span className="d-flex justify-content-center">
                  <img src={hamburger} alt="cart" className="icon" />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* SIDEBAR */}
      <div
        className="offcanvas offcanvas-end p-4"
        tabIndex="-1"
        id="sideBar"
        aria-labelledby="sideBarLabel"
      >
        <div className="offcanvas-header justify-content-end">
          <button
            className="border-0 d-flex align-items-center"
            style={{ background: "transparent" }}
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="d-flex close">
              <ion-icon name="close-sharp"></ion-icon>
            </span>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="d-grid align-items-center">
            <Link
              to="/"
              className="fs-4 text-decoration-none py-3 text-dark border-top"
              reloadDocument
            >
              Home
            </Link>
            <Link
              to="/newArrival"
              className="fs-4 text-decoration-none py-3 text-dark border-top"
              reloadDocument
            >
              New Arrival
            </Link>
            <Link
              to="/latest"
              className="fs-4 text-decoration-none py-3 text-dark border-top"
              reloadDocument
            >
              Latest
            </Link>
            <Link
              to="/men"
              className="fs-4 text-decoration-none py-3 text-dark border-top"
              reloadDocument
            >
              Men's
            </Link>
            <Link
              to="/kid"
              className="fs-4 text-decoration-none py-3 text-dark border-top"
              reloadDocument
            >
              Kids
            </Link>
            <Link
              to="/women"
              className="fs-4 text-decoration-none py-3 text-dark border-top border-bottom"
              reloadDocument
            >
              Ladies
            </Link>
          </div>

          <div className="d-flex gap-3 w-100 sidebar__btn">
            <div>
              <MainButton btnType="black-Button border f-sm px-4">
                Sign up
              </MainButton>
            </div>
            <div>
              <MainButton btnType="white-Button border f-sm px-4">
                Log In
              </MainButton>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCHBAR */}
      <div
        className="offcanvas offcanvas-top nav__search"
        tabIndex="-1"
        id="search"
        aria-labelledby="searchLabel"
      >
        <div className="container-xxl">
          <div className="offcanvas-header position-relative">
            <div className="d-flex justify-content-center align-items-center hidden_991">
              <Link to="/" className="fw-bold">
                <img src={logo} alt="logo" className="nav__logo" />
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="w-100">
              <div
                className="nav__searchBar position-absolute top-50 start-50 translate-middle bg-light rounded-5 w-50 d-flex align-items-center"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                  padding: ".2rem 1rem",
                }}
              >
                <span className="d-flex justify-content-center">
                  <img src={search} alt="cart" className="icon" />
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                {input === "" ? (
                  ""
                ) : (
                  <span
                    className="d-flex justify-content-center icons"
                    style={{ cursor: "pointer" }}
                    onClick={() => setInput("")}
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                )}
              </div>
            </form>
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="border-0 fw-semibold nav__cancel"
              style={{ background: "#fff" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
