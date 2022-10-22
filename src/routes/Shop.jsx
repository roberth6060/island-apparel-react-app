import { useContext, Fragment } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import ProductCard from "../components/Product/ProductCard";
import "./scss/Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const x = categoriesMap.jackets;
  console.log(x);
  console.log(Object.keys(categoriesMap));
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
