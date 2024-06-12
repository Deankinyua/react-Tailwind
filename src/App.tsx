// import Checkbox from "./components/Checkbox";
// import Challenge from "./components/challenge";
// import { useState } from "react";
import "./App.css";
// import Message from "./components/Message";
// import State from "./components/State";
// import StateSharing from "./components/StateSharing";
// import CartCount from "./components/CartCount";
// import Game from "./components/Game";
import ExpandableText from "./components/ExpandableText";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import State from "./components/State";

function App() {
  // const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [cartItems, setCartItems] = useState([
  //   "Item1",
  //   "Item2",
  //   "Item3",
  //   "Item4",
  // ]);

  return (
    <>
      {/* <h1 className="text-3xl font-black underline">
        My React Application written with TailwindCSS
      </h1>
      <ListGroup
        items={items}
        heading="List of Cities in Europe"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      <Alert>Fruits</Alert> */}

      {/* <Checkbox></Checkbox> */}
      {/* <Challenge /> */}
      {/* <State></State>
      <Message></Message>
      <StateSharing
        cartItems={cartItems}
        onClear={() => setCartItems([])}
      ></StateSharing>
      <CartCount cartItemsCount={cartItems.length}></CartCount>
      <Game></Game> */}
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
        expedita vero sed ipsa quam cumque molestias praesentium in et, est
        maiores dolorum facere aut dicta consequatur. A, tenetur. Aperiam,
        provident blanditiis perferendis voluptatibus nobis quas laboriosam
        quasi. Quis consectetur ex iste odit necessitatibus labore deserunt
        laborum quo amet qui optio modi, eum at ipsum sunt delectus eos.
        Temporibus vitae porro ea, qui nemo, beatae pariatur dolore, eveniet
        officia quia ab omnis amet eligendi cupiditate distinctio illum.
        Expedita, saepe consequuntur excepturi dolor placeat quo autem id velit
        sunt cumque voluptatem harum non quas recusandae provident quasi eos
        explicabo ad deleniti.
      </ExpandableText>
    </>
  );
}

export default App;
