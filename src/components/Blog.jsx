import MainButton from "./Reusable/MainBtn";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="container-xxl">
      <div className="blog">
        <h1 className="display-4 fw-bold">Blog</h1>

        <div className="row g-3 mt-5 blog__row">
          <div className="col-md-5 col-lg-5">
            <div className="card text-start border-0 position-relative">
              <img
                className="card-img-top rounded-0"
                src="https://i.ibb.co/VNgRj7h/blog-1.png"
                alt="Title"
              />

              <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 px-4 pb-4">
                <h4 className="text-light">
                  Discover the Best-Selling Items on ThriveLuxe
                </h4>
                <p className="text-light f-sm mt-3">
                  Dive into our top-selling products and uncover what makes them
                  so popular among our customers.
                </p>
                <Link className="text-light text-decoration-none">
                  Read Now
                </Link>
              </div>
            </div>

            <div className="show_767">
              <MainButton btnType="black-Button" border="border">
                Explore More
              </MainButton>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 hidden_767">
            <div className="row g-3">
              <div className="col-6">
                <div className="card text-start border-0">
                  <img
                    className="card-img-top rounded-0"
                    src="https://i.ibb.co/6gFGRM5/blog-2.png"
                    alt="Title"
                  />

                  <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 px-4 pb-4">
                    <h5 className="text-light pb-2 blog__description">
                      Expert Tips for Making the Most of Our Product Selection
                    </h5>
                    <Link className="text-light text-decoration-none">
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card text-start border-0 position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="https://i.ibb.co/WWGbWPz/blog-3.png"
                    alt="Title"
                  />

                  <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 px-4 pb-4">
                    <h5 className="text-light pb-2 blog__description">
                      Exploring the Story and Creation Process of Our Featured
                      Products
                    </h5>
                    <Link className="text-light text-decoration-none">
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card text-start border-0 position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="https://i.ibb.co/T2KH9Zm/blog-4.png"
                    alt="Title"
                  />

                  <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 px-4 pb-4">
                    <h5 className="text-light pb-2 blog__description">
                      Real-Life Experiences with Our Products and Services
                    </h5>
                    <Link className="text-light text-decoration-none">
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-6 position-relative border-bottom">
                <div className="position-absolute bottom-0 end-0">
                  <p className="f-sm fw-semibold">See Ad Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
