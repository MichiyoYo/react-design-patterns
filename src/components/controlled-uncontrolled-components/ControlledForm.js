import React, { useState, useEffect } from "react";

function ControlledForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");
  const [nameInputErr, setNameInputErr] = useState("");

  useEffect(() => {
    if (name.length < 2)
      setNameInputErr("Name must be at least 2 characters long");
    else setNameInputErr("");
  }, [name]);

  /**
   * In controlled forms the values of the inputs are controlled by the state,
   * while in uncontrolled forms each input has its own state which we can access after
   * a submit event occurs.
   * The controlled component is creating a two way binding bewteen the value of the input fields
   * and the value of the states.
   * Controlled forms are good for live form validation
   */
  return (
    <form>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <small>{nameInputErr}</small>
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
      {/**when we are not relying on the onSubmit event we can just use a button
       * instead of an input with type "submit"
       */}
      <button>Submit</button>
    </form>
  );
}

export default ControlledForm;
