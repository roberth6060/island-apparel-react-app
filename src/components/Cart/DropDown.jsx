// import "./scss/DropDown.scss";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { CartDropDownContainer, CartItems } from "./styles/DropDown";

const DropDown = () => {
  //Retrieves cartContext to obtain cartItems useState
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={gotToCheckoutHandler}>CHECKOUT</Button>
      </CartItems>
    </CartDropDownContainer>
  );
};

export default DropDown;
