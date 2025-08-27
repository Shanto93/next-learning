import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
type TProps = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async (props: TProps): Promise<Metadata> => {
  const id = (await props.params).productId;
  return {
    title: `Product ${id}`,
    description: `This is the page for product ${id}`,
  };
};

const SingleProduct = async ({ params }: TProps) => {
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