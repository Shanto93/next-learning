import React from "react";

const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const product_id = (await params).productId
  return (
    <div>
      <h2>This is product : {product_id}</h2>
    </div>
  );
};

export default SingleProduct;
