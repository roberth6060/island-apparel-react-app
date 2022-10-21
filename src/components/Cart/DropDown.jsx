import "./scss/DropDown.scss";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const DropDown = () => {
  //Retrieves cartContext to obtain cartItems useState
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default DropDown;
