import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelector";
import CheckoutItem from "../common/CheckoutItem/CheckoutItem";
import "./style/Checkout";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
} from "./style/Checkout";
import Payment from "../common/Form/Payment";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <Payment />
    </CheckOutContainer>
  );
};

export default Checkout;
