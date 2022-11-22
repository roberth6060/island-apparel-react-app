import { CartIconContainer, ItemCount, ShoppingIcon } from "./styles/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../../store/cart/cartSelector";
import { setIsCartOpen } from "../../../store/cart/cartAction";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  //Toggle effects
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
