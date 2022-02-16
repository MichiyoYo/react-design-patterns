import React from "react";

function LargePersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;
  return (
    <li>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </li>
  );
}

export default LargePersonListItem;
