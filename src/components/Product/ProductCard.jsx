import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductCardContainer, Footer } from "./style/ProductCard";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img width="400" alt={`${name}`} src={imageUrl} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
