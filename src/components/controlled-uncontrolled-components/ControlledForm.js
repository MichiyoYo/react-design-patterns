import React, { useState } from "react";

function ControlledForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  /**
   * In controlled forms the values of the inputs are controlled by the state,
   * while in uncontrolled forms each input has its own state which we can access after
   * a submit event occurs.
   * The controlled component is creating a two way binding bewteen the value of the input fields
   * and the value of the states
   */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        type="text"
        name="hairColor"
        id="hairColor"
        value={hairColor}
        placeholder="hair color"
        onChange={(e) => setHairColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ControlledForm;
