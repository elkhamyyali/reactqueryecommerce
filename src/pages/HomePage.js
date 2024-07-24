import React from "react";
import ProductList from "../components/product/ProductList";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Welcome to Our Store </h1>{" "}
      <ProductList />
    </div>
  );
}

export default HomePage;
