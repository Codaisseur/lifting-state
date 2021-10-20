import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const onIncrementClick = clickedId => {
    console.log("updating id", clickedId);

    const updatedPlayerArray = players.map(p => {
      if (p.id === clickedId) {
        // this is the one
        return {
          id: p.id,
          name: p.name,
          score: p.score + 1,
        };
      } else {
        return p;
      }
    }); // [{}, {}, {+1}, {}]

    set_players(updatedPlayerArray);
  };

  const createNewPlayer = newName => {
    // createNewPlayer("Matias")
    // players => [{}, {}, {}, {}]
    //
    const newPlayer = {
      name: newName,
      id: Math.random() * 100, // disregard
      score: 0,
    };

    const newList = [newPlayer, ...players];
    set_players(newList);
  };

  return (
    <div>
      <h1>Scoreboard</h1>
      <AddPlayerForm createNewPlayer={createNewPlayer} />
      <ul>
        {players.map(p => (
          <Player
            name={p.name}
            score={p.score}
            id={p.id}
            key={p.id}
            onIncrementClick={onIncrementClick}
          />
        ))}
      </ul>
      {/* <button onClick={createNewPlayer}>New player</button> */}
    </div>
  );
};

export default Scoreboard;
