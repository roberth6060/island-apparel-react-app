import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import {
  CheckoutItemContainer,
  ImgContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./style/CheckoutItem";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  //Handler functions
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const leftArrowHandler = () => removeItemToCart(cartItem);
  const rightArrowHandler = () => addItemToCart(cartItem);

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
