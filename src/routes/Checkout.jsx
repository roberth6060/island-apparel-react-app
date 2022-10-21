import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./scss/Checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <img width="300" alt={cartItem.name} src={cartItem.imageUrl} />
              <span>{cartItem.price}</span>
              <span> {cartItem.quantity}</span>
              <span onClick={() => removeItemToCart(cartItem)}>&#60;</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>&#62;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
