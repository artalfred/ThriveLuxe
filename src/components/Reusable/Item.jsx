import { useState } from "react";
import deletes from "../../image/Icon/deletes.png";
import heart from "../../image/Icon/heart.png";

export default function Item({
  item,
  name,
  price,
  size,
  image,
  onDeleteItem,
  onQuantityChange,
}) {
  return (
    <div className="d-flex gap-4 align-items-center w-100 py-4 border-bottom">
      <div className=" border-0">
        <img style={{ height: "10rem" }} src={image} alt="img" />
      </div>

      <div className="w-100">
        <div className="d-flex align-items-center justify-content-between item__title">
          <h6 className="mb-0 fw-semibold">{name}</h6>

          <span className="fs-6 mb-0" style={{ fontWeight: "500" }}>
            ₱{item.quantity * price}.00
          </span>
        </div>

        <div className="d-flex gap-5 align-items-center mt-2 item__title">
          <h6 className=" f-sm text-secondary mb-0">Size: {size}</h6>
          <div className="d-flex align-items-center gap-1">
            <h6 className=" f-sm text-secondary mb-0">Quantity:</h6>
            <select
              className="border-0 outline-0 px-2"
              style={{ outline: "none" }}
              value={item.quantity}
              onChange={(event) => onQuantityChange(item.id, event)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>

        <div className="d-flex gap-3 mt-5">
          <button className="cart__icon">
            <img src={heart} alt="delete" />
          </button>
          <button className="cart__icon" onClick={() => onDeleteItem(item.id)}>
            <img src={deletes} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
