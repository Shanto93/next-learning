import React from "react";
import { notFound } from "next/navigation";

const SingleReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
    if (parseInt(productId) > 20 || parseInt(reviewId) > 20) {
        notFound();
    }
  return (
    <div>
      <h2>
        Details about product {productId} and review {reviewId}{" "}
      </h2>
    </div>
  );
};

export default SingleReviewPage;
