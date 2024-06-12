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

  const [cart, setCart] = useState({
    discount: 0.5,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
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

      <button
        onClick={() => {
          setCart({
            ...cart,
            items: cart.items.map((item) =>
              item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
          console.log(cart.items);
        }}
      >
        cart modifier
      </button>
    </div>
  );
};

export default Game;
