import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";

function ProductPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails productId={id} />{" "}
    </div>
  );
}

export default ProductPage;
