import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutItemContainer,
  ImgContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./style/CheckoutItem";
import { selectCartItems } from "../../../store/cart/cartSelector";
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../../store/cart/cartAction";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  //Handler functions
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const leftArrowHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const rightArrowHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={leftArrowHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={rightArrowHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> ${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;