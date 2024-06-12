import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ExpandableText = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ExpandableText;
