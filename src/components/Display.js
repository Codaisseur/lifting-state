const Display = props => {
  const valueOfCounter = props.counter;
  return (
    <div>
      <h3>This is the counter viewer:</h3>
      <div>The current value of the counter is: {valueOfCounter} </div>
    </div>
  );
};

export default Display;
