import { useState } from "react";

const AddPlayerForm = props => {
  const [name, setName] = useState(""); // keep the input value

  // collect a name for our new player
  const onNameChange = event => {
    setName(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault(); // stop the default refresh.
    props.createNewPlayer(name); // adding him to the state up top
  };

  return (
    <div style={{ border: "3px solid white" }}>
      <form onSubmit={onFormSubmit}>
        <h3>Create a new player</h3>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={event => onNameChange(event)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
