import { useState } from "react";

type Props = {
  children: string;
  //   maxChars?: number;
};

const ExpandableText = ({ children }: Props) => {
  const [max, setMax] = useState(100);
  if (children.length <= max)
    return (
      <>
        <p>{children}...</p>
        <button
          onClick={() => {
            setMax(100);
          }}
        >
          Less
        </button>
      </>
    );

  const text = children.substring(0, max);

  return (
    <>
      <p>{text}...</p>

      <button
        onClick={() => {
          setMax(children.length);
        }}
      >
        More
      </button>
    </>
  );
};

export default ExpandableText;
