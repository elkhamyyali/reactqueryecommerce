import React from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/api";

function ProductList() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", fetchProducts);

  if (isLoading) return <div className="text-center"> Loading... </div>;
  if (error)
    return (
      <div className="text-center text-red-500"> Error: {error.message} </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {" "}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}{" "}
    </div>
  );
}

export default ProductList;
