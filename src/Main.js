import React from "react";
import Hero from "./components/Hero";
import New from "./components/New";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Header from "./components/Header";

function Main({ totalItems }) {
  return (
    <div>
      <Header totalItems={totalItems} home="fw-semibold" />
      <Hero />
      <New />
      <Blog />
    </div>
  );
}

export default Main;
