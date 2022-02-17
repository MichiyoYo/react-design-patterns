import React from "react";

function ProductInfo({ product }) {
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

export default ProductInfo;
