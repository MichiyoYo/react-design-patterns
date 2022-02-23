import React from "react";

const isObject = (x) => {
  return typeof x === "object" && x !== null;
};

function RecursiveComponent({ data }) {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);
  return (
    <ul>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default RecursiveComponent;
