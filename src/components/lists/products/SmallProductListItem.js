import React from "react";

function SmallProductListItem({ product }) {
  const { name, price } = product;

  return (
    <li>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </li>
  );
}

export default SmallProductListItem;
