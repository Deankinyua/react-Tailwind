import { useState } from "react";

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
        <button className="btn w-16">Button</button>
      </div>
    </>
  );
};

export default ListGroup;
