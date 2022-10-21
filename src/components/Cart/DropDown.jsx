import "./scss/DropDown.scss";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  //Retrieves cartContext to obtain cartItems useState
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={gotToCheckoutHandler}>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default DropDown;
