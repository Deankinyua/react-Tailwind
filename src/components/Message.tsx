import { useState } from "react";

let count = 0;

const Message = () => {
  const [tags, setTags] = useState(["Happy", "Sad"]);

  const handleClick = () => {
    // Updating an array
    setTags([...tags, "Exciting"]);
    // Removing an item from an array
    setTags(tags.filter((tag) => tag !== "Happy"));
    // updating an object

    setTags(tags.map((tag) => (tag === "Happy" ? "Sad" : tag)));
  };

  const [drink, setDrink] = useState({
    title: "Americano",
    color: "orange",
    manufactured: "Los Angeles",
    price: 40,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Fransisco",
      zip: 94111,
    },
  });

  console.log("Message Count: ", count);
  count++;

  return (
    <>
      <div>{JSON.stringify(drink)}</div>
      <button
        onClick={() => {
          const newDrink = {
            ...drink,
            price: drink.price + 10,
            drinkers: "Youth",
          };

          setDrink(newDrink);
        }}
      >
        Update Drink
      </button>

      <div>{JSON.stringify(customer)}</div>
      <button
        onClick={() => {
          setCustomer({
            ...customer,
            address: {
              ...customer.address,
              zip: 8960707,
            },
          });
        }}
      >
        Update Customer
      </button>
    </>
  );
};

export default Message;
