import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../store/cart/cartAction";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { ProductCardContainer, Footer } from "./style/ProductCard";
import { selectCartItems } from "../../../store/cart/cartSelector";
import { CategoryItem } from "../../../store";

type ProductCardProps = {
  product: CategoryItem;
}

const ProductCard: React.FC <ProductCardProps> = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img width="400" alt={`${name}`} src={imageUrl} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
