import MainButton from "./Reusable/MainBtn";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-xxl">
      <div className="footer p-5">
        <div className="row">
          <div className="col-lg-6 py-5 border-end footer__signUp">
            <h2 className="text-light text-center">SIGN UP FOR NEWSLETTER</h2>
            <p className="text-light text-center f-sm mt-3">
              Exciting news delivered straight to your inbox.
            </p>

            <center>
              <MainButton btnType="white-Button">Subscribe</MainButton>
            </center>
          </div>

          <div className="col-lg-6 py-5 hidden_991">
            <h2 className="text-light text-center">NEWS</h2>
            <p className="text-light text-center f-sm mt-3">
              Sign up for our newsletter and stay in the loop!
            </p>

            <center>
              <MainButton btnType="black-Button">Subscribe</MainButton>
            </center>
          </div>
        </div>
      </div>

      <div className="">
        <div className="d-flex align-items-center justify-content-between border-bottom py-5 footer__div">
          <div className="d-flex gap-5 footer__row_1">
            <Link className="text-decoration-none text-dark fw-semibold">
              Home
            </Link>
            <Link className="text-decoration-none text-dark fw-semibold">
              Shop
            </Link>
            <Link className="text-decoration-none text-dark fw-semibold">
              About Us
            </Link>
          </div>

          <div className="footer__row_2">
            <Link to="/" className="fw-bold">
              <img src={logo} alt="logo" className="nav__logo" />
            </Link>
          </div>

          <div className="d-flex gap-5 footer__row_3">
            <Link className="text-decoration-none text-dark fw-semibold">
              Blog
            </Link>
            <Link className="text-decoration-none text-dark fw-semibold">
              News
            </Link>
            <Link className="text-decoration-none text-dark fw-semibold">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="f-xsm text-center py-3 fw-semibold mb-0">
            Created by Art Alfred Bernales &copy; 2023
          </p>
        </div>
      </div>
    </div>
  );
}
