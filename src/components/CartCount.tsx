type Props = {
  cartItemsCount: number;
};

const CartCount = ({ cartItemsCount }: Props) => {
  return <div>CartCount: {cartItemsCount}</div>;
};

export default CartCount;
