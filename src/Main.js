import React from "react";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Feature from "./components/Featured";

function Main({ totalItems }) {
  return (
    <div>
      <Header totalItems={totalItems} home="fw-semibold" />
      <Hero />
      <Feature />
      <Blog />
    </div>
  );
}

export default Main;
