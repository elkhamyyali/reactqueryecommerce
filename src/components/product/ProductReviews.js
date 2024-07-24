import React from "react";
import { useQuery } from "react-query";
import { fetchProductReviews } from "../../services/api";

function ProductReviews({ productId }) {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery(["productReviews", productId], () =>
    fetchProductReviews(productId)
  );

  if (isLoading) return <div className="text-center"> Loading reviews... </div>;
  if (error)
    return (
      <div className="text-center text-red-500">
        Error loading reviews: {error.message}{" "}
      </div>
    );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4"> Customer Reviews </h2>{" "}
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <span className="font-bold mr-2"> {review.user} </span>{" "}
            <span className="text-yellow-500">
              {" "}
              {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}{" "}
            </span>{" "}
          </div>{" "}
          <p> {review.comment} </p>{" "}
        </div>
      ))}{" "}
    </div>
  );
}

export default ProductReviews;
