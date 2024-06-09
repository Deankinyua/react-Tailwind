// import Checkbox from "./components/Checkbox";
// import Challenge from "./components/challenge";
import "./App.css";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import State from "./components/State";

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <h1 className="text-3xl font-black underline">
        My React Application written with TailwindCSS
      </h1>
      <ListGroup
        items={items}
        heading="List of Cities in Europe"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      <Alert>Fruits</Alert>
      {/* 
      <Checkbox></Checkbox>
      <Challenge /> */}
      <State></State>
    </>
  );
}

export default App;
