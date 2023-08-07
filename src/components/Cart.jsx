import Footer from "./Footer";
import Header from "./Header";

import MainButton from "./Reusable/MainBtn";
import Item from "./Reusable/Item";
import { useState } from "react";

export default function Cart({
  items,
  onDeleteItems,
  totalPrice,
  totalItems,
  onQuantityChange,
  setItem,
}) {
  const [checkout, setCheckout] = useState(false);
  const [checkoutWarning, setCheckoutWarning] = useState("");
  const [checkoutBg, setCheckoutBg] = useState("");

  function handleCheckout() {
    setCheckout(true);

    if (totalItems > 0) {
      setCheckoutWarning(
        "Thank you for your purchase. Your order has been successfully placed."
      );
      setCheckoutBg("bg-success");
      setItem((items) => items.splice());
    } else {
      setCheckoutWarning("please make sure you have added items to your cart.");
      setCheckoutBg("bg-danger");
    }
  }

  return (
    <div>
      <Header totalItems={totalItems} />
      <div className="cart">
        <div className="container-xxl">
          <h1 className="mt-5 display-4" style={{ fontWeight: "800" }}>
            My Cart
          </h1>

          <div className="row gx-5 gy-4 mt-3">
            <div className="col-12 col-md-7 ">
              <div className="overflow-auto cart__items pe-3">
                {items.map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      name={item.name}
                      price={item.price}
                      size={item.size}
                      image={item.image}
                      onDeleteItem={onDeleteItems}
                      onQuantityChange={onQuantityChange}
                    />
                  );
                })}
              </div>

              {/* SUB TOTAL */}
              <div className="mt-4">
                {totalItems > 0 ? (
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="f-sm fw-semibold">Sub-total</p>

                    <span className="fs-6 mb-0" style={{ fontWeight: "500" }}>
                      ₱{totalPrice}.00
                    </span>
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="f-sm">There are no items in your bag.</p>
                  </div>
                )}
              </div>
            </div>

            {/* CHECKOUT */}
            <div className="col-12 col-md-5 px-4">
              <div className="cart__checkout">
                {/* FREE & FAST DEVELIVERY OPTION */}
                <div className="d-grid gap-2 border-bottom pb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="freeDevelivery"
                    />
                    <label
                      className="form-check-label f-sm ms-2"
                      htmlFor="freeDevelivery"
                    >
                      Free delivery{" "}
                      <span className="text-secondary ms-2">
                        15-20 business days
                      </span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="fastDevelivery"
                    />
                    <label
                      className="form-check-label f-sm ms-2"
                      htmlFor="fastDevelivery"
                    >
                      ₱30 DHL delivery
                      <span className="text-secondary ms-2">
                        5-7 business days
                      </span>
                    </label>
                  </div>
                </div>

                {/* FORM */}
                <div className="mt-4">
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        type="number"
                        className="form-control rounded-0 px-3 cart__number"
                        style={{ padding: ".7rem 0.5rem" }}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="xxxx   xxxx   xxxx   xxxx"
                      />
                    </div>

                    <div className="col-12">
                      <div className="row g-3">
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control rounded-0 f-sm cart__number px-3"
                            style={{ padding: ".7rem 0.5rem" }}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            max={3}
                            min={1}
                            className="form-control rounded-0 cart__number px-3"
                            style={{ padding: ".7rem 0.5rem" }}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <MainButton
                    btnType="pay-btn f-sm w-100"
                    onClick={handleCheckout}
                  >
                    PAY {totalPrice}.00
                  </MainButton>

                  <p className="f-sm fw-semibold text-center mt-4 mb-0 cart__discount">
                    Add discount code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {checkout && (
        <div
          className={`position-absolute top-50 start-50 translate-middle p-4 border bg-success rounded-1 border-0 ${checkoutBg}`}
          style={{ width: "30rem" }}
        >
          <p className="text-center mb-0 text-light">{checkoutWarning}</p>

          <div className="d-flex align-items-center justify-content-center">
            <MainButton
              btnType="bg-light py-2 px-4 f-sm border-0 rounded-1"
              onClick={() => setCheckout(false)}
            >
              Ok
            </MainButton>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
