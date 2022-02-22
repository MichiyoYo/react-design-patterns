import axios from "axios";
import React from "react";
import { useDataSource } from "./useDataSource";

const serverResource = (resourceUrl) => {
  return async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
  };
};

const localStorageResource = (key) => {
  return localStorage.getItem(key);
};

function UserInfo5({ userId }) {
  const user = useDataSource(serverResource(`/users/${userId}`));
  //const message = useDataSource(localStorageResource("token"));
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

export default UserInfo5;
