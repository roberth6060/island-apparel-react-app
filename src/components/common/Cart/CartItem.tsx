import React, {memo} from "react";
import { CartItemContainer, ItemDetails } from "./styles/CartItem";
import { CartItem as CartItemType } from "../../../store/cart/cartTypes";

type CartItemProps ={
  cartItem: CartItemType;
}

const CartItem: React.FC<CartItemProps> = memo(({ cartItem }) => {
  const {  name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img alt={`${name}`} src={imageUrl} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
