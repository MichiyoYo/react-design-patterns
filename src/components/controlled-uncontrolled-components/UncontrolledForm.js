import React from "react";

function UncontrolledForm(props) {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        ref={nameInput}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="age"
        ref={ageInput}
      />
      <input
        type="text"
        name="hairColor"
        id="hairColor"
        placeholder="hairColor"
        ref={hairColorInput}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default UncontrolledForm;
