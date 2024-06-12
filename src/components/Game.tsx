import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 20,
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  return (
    <div>
      <h1>{game.player.name}</h1>
      <h1>{game.player.age}</h1>
      {/* <h1>{pizza.toppings}</h1> */}

      <button
        onClick={() => {
          setGame({ ...game, player: { ...game.player, name: "Omosh" } });
        }}
      >
        Change Name
      </button>

      <button
        onClick={() => {
          setPizza({ ...pizza, toppings: [...pizza.toppings, "Onions"] });
          console.log(pizza.toppings);
        }}
      >
        Add a new Topping
      </button>
    </div>
  );
};

export default Game;
