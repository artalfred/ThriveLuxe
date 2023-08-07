import Main from "./Main";
import { Routes, Route } from "react-router";
import Product from "./components/Pages/Product";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import NewArrivals from "./components/Pages/NewArrivals";
import Footer from "./components/Footer";
import Latest from "./components/Pages/Latest";
import Men from "./components/Pages/Men";
import Kid from "./components/Pages/Kid";
import Women from "./components/Pages/Women";
import Searched from "./components/Pages/Searched";

function App() {
  const products = JSON.parse(localStorage.getItem("products"));
  const [items, setItems] = useState(products || []);
  const [total, setTotal] = useState();
  const [quantity, setQuantity] = useState(1);

  //ADD ITEMS
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  // DELETE ITEMS
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // HANDLE QUANTITY
  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setItems((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
  };

  // TOTAL PRICE
  function sums() {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }

  // TOTAL ITEMS
  const totals = items.length;

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(items));

    sums();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main totalItems={totals} />}></Route>
        <Route
          path="/product/:nameOfProduct/:id"
          element={
            <Product
              onAddItems={handleAddItems}
              quantity={quantity}
              setQuantity={setQuantity}
              totalItems={totals}
              item={items}
              setItem={setItems}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              onDeleteItems={handleDeleteItem}
              totalPrice={total}
              totalItems={totals}
              onQuantityChange={handleQuantityChange}
              setItem={setItems}
            />
          }
        ></Route>
        <Route
          path="/newArrival"
          element={<NewArrivals items={items} totalItems={totals} />}
        />
        <Route
          path="/latest"
          element={<Latest items={items} totalItems={totals} />}
        />
        <Route
          path="/men"
          element={<Men items={items} totalItems={totals} />}
        />
        <Route
          path="/kid"
          element={<Kid items={items} totalItems={totals} />}
        />
        <Route
          path="/women"
          element={<Women items={items} totalItems={totals} />}
        />
        <Route
          path="/searched/:search"
          element={<Searched totalItems={totals} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
