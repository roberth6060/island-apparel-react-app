import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./styles/DropDown";
import { selectCartItems } from "../../../store/cart/cartSelector";

const DropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}

        <Button onClick={gotToCheckoutHandler}>CHECKOUT</Button>
      </CartItems>
    </CartDropDownContainer>
  );
};

export default DropDown;
