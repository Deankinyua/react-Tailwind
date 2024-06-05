import "./App.css";
// import ListGroup from "./components/ListGroup";
import Challenge from "./components/challenge";

function App() {
  //   const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   };

  return (
    <>
      {/* <h1 className="text-3xl font-black underline">
        My React Application written with TailwindCSS
      </h1>
      <ListGroup
        items={items}
        heading="List of Cities in Europe"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      <Challenge />
    </>
  );
}

export default App;
