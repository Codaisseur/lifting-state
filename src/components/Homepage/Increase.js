const Increase = props => {
  console.log(props);
  // also pass counter
  // A value.
  // a button to increase it.

  return (
    <div style={{ border: "3px solid red", marginBottom: 20 }}>
      <div>Increase</div>
      <button onClick={() => props.increase()}>+</button>
    </div>
  );
};

export default Increase;
