import React from "react";

function SmallPersonListItem({ person }) {
  const { name, age } = person;

  return (
    <li>
      Name: {name}, Age: {age}
    </li>
  );
}

export default SmallPersonListItem;
