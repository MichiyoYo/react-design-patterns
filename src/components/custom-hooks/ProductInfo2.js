import React from "react";
import { useResource } from "./useResource";

function ProductInfo2({ productId }) {
  const product = useResource(`/products/${productId}`);
  const { name, price, description, rating } = product || {};
  return product ? (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductInfo2;
