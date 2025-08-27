import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h2>List of products: </h2>
      <ul>
        <Link href="/products/1">
          <li>Product 1</li>
        </Link>
        <Link href="/products/2" replace>
          <li>Product 2</li>
        </Link>
        <Link href="/products/3">
          <li>Product 3</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProductsPage;
