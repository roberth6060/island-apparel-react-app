import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/Product/ProductCard";
import "./scss/Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;