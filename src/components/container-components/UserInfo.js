import React from "react";

function UserInfo({ user }) {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
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
  ) : (
    <p>Loading...</p>
  );
}

export default UserInfo;
