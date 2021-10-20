import Increase from "./Increase";
import Display from "./Display";
import { useState } from "react";

const Homepage = () => {
  // We lifted the state to the parent
  // We gave a child component
  const [counter, setCounter] = useState(999);

  const addOneToCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Homepage</h2>
      <Increase increase={addOneToCounter} />
      <div style={{ border: "2px solid  white" }}>
        <Display counter={counter} />
        {/* props.counter */}
      </div>
    </div>
  );
};

export default Homepage;
