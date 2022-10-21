import "./scss/CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img alt={id} src={imageUrl} />
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
