import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2"> {product.title} </h2>{" "}
        <p className="text-gray-600 mb-2"> $ {product.price.toFixed(2)} </p>{" "}
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View Details{" "}
          </Link>{" "}
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Add to Cart{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductCard;
