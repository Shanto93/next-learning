import React from "react";
import { notFound } from "next/navigation";

const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const product_id = (await params).productId;
  if (parseInt(product_id) > 20) {
    notFound();
  }
  return (
    <div>
      <h2>This is product : {product_id}</h2>
    </div>
  );
};

export default SingleProduct;
