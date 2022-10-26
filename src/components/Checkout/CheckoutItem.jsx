import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faLessThan,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
// import "./scss/CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, removeItemToCart, addItemToCart } =
    useContext(CartContext);

  //Handler functions
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const leftArrowHandler = () => removeItemToCart(cartItem);
  const rightArrowHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="img-container">
        <img width="300" alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={leftArrowHandler}>
          <FontAwesomeIcon icon={faLessThan} />
        </div>
        <span className="value"> {cartItem.quantity}</span>
        <div className="arrow" onClick={rightArrowHandler}>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div onClick={clearItemHandler} className="remove-btn">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default CheckoutItem;
