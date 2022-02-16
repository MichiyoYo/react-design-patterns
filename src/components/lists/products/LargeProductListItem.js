import React from "react";

function LargeProductListItem({ product }) {
  const { name, price, description, rating } = product;
  return (
    <li>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
    </li>
  );
}

export default LargeProductListItem;
