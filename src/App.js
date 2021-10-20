import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello class 54</h1>
        {/* <Homepage /> */}
        <Scoreboard />
      </header>
    </div>
  );
}

export default App;
