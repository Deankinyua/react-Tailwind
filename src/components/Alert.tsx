import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const Alert = ({ children }: Props) => {
  const [heartState, setHeartState] = useState(false);

  return (
    <>
      <div>This are the {children}</div>
      <div>
        {heartState && (
          <AiFillHeart
            color="#ff6b81"
            size={20}
            onClick={() => {
              setHeartState(false);
              console.log("unliked");
            }}
          />
        )}
      </div>
      <div>
        {!heartState && (
          <AiOutlineHeart
            size={20}
            onClick={() => {
              setHeartState(true);
              console.log("liked");
            }}
          />
        )}
      </div>
    </>
  );
};

export default Alert;
