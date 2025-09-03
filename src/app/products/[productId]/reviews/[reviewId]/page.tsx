import React from "react";
import { notFound } from "next/navigation";

const SingleReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  const randomGenerate = (count: number) => {
    return Math.floor(Math.random() * count) + 1;
  };

  const random = randomGenerate(2);

  if (random === 2) {
    throw new Error("Failed to fetch data");
  }

  if (parseInt(productId) > 20 || parseInt(reviewId) > 20) {
    notFound();
  }

  return (
    <div>
      <h2>Details about product {productId}</h2>
      <h2>Details about product review {reviewId}</h2>
    </div>
  );
};

export default SingleReviewPage;
