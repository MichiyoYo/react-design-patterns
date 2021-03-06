import React from "react";
import { useResource } from "./useResource";

function UserInfo4({ userId }) {
  const user = useResource(`/users/${userId}`);

  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default UserInfo4;
