// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag-svgrepo-com.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./styles/CartIcon";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //Toggle effects
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
