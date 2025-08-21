import React from "react";

const SingleReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h2>
        Details about product {productId} and review {reviewId}{" "}
      </h2>
    </div>
  );
};

export default SingleReviewPage;
