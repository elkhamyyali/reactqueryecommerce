import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../services/api";
import { useCart } from "../../contexts/CartContext";
import ProductReviews from "./ProductReviews";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", id], () => fetchProduct(id));

  if (isLoading) return <div className="text-center"> Loading... </div>;
  if (error)
    return (
      <div className="text-center text-red-500"> Error: {error.message} </div>
    );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-50 h-50"
          />
        </div>{" "}
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4"> {product.title} </h1>{" "}
          <p className="text-xl mb-4"> $ {product.price.toFixed(2)} </p>{" "}
          <p className="mb-4"> {product.description} </p>{" "}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <ProductReviews productId={id} />{" "}
    </div>
  );
}

export default ProductDetails;
