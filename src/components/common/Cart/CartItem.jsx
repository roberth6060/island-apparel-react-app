import { CartItemContainer, ItemDetails } from "./styles/CartItem";

const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img alt={id} src={imageUrl} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
