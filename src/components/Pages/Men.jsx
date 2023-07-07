import { useState } from "react";
import NewApi from "../../Api";
import Pages from "../Reusable/Pages";
import Header from "../Header";

export default function Men({ totalItems }) {
  const [count, setCount] = useState(30);
  const [countTwo, setCountTwo] = useState(38);

  function handleNext() {
    if (count === 1) {
      setCount(30);
    } else if (count === 2) {
      setCount(37);
    }
  }

  return (
    <div>
      <Header men="fw-semibold" totalItems={totalItems} />
      <Pages
        ApiProduct={NewApi}
        sortedSliceFirst="30"
        sortedSliceSecond="38"
        title="Modern Men's Fashion"
        description="Explore our exclusive collection of men's clothing, accessories, and footwear designed to elevate your style and make a statement."
      />
    </div>
  );
}
