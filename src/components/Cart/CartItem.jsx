import "./scss/CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img alt={id} src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
