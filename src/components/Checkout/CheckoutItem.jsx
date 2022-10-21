import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./scss/CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  return (
    <div className="checkout-item-container">
      <div className="img-container">
        <img width="300" alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">${cartItem.price}</span>
      <div className="remove-btn">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default CheckoutItem;
