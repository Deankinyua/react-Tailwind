import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Alert = ({ children }: Props) => {
  return (
    <>
      <div>This are the {children}</div>
    </>
  );
};

export default Alert;
