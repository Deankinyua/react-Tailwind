// Pseudocode for sharing state within components

/* remember you must first lift the state up in order to use it

I. initialise the state in the parent contain e.g APP.TSX.
II. Create Props in the child components that would make use of the state 
III. When rendering the components from the parent 
IV. pass the state as values to the props you declared in your child components

*/

type Props = {
  cartItems: string[];
  onClear: () => void;
};

const StateSharing = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default StateSharing;
