import "./scss/DropDown.scss";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const DropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map((item) => (
          <CartItem cartItem={item} />
        ))}
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default DropDown;
