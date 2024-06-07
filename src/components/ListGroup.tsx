import { useState } from "react";

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [state, setState] = useState(false);

  return (
    <>
      <h1>{heading}</h1>
      <div className="leading-relaxed p-6">
        {items.length == 0 && <p>No item found</p>}
        <ul className="list-disc">
          {items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              className={
                selectedIndex === index ? "text-base bg-blue-600" : "text-base"
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <p className={state === false ? "hidden" : ""}>item is opened</p>
        <button
          className="btn w-16"
          onClick={() => {
            setState(true);
          }}
        >
          open
        </button>
        <button
          className="btn w-16"
          onClick={() => {
            setState(false);
          }}
        >
          close
        </button>
      </div>
    </>
  );
};

export default ListGroup;
