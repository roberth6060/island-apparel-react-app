import CheckoutItem from "../common/Checkout/CheckoutItem";
import "./style/Checkout.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
} from "./style/Checkout";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </CheckOutContainer>
  );
};

export default Checkout;
