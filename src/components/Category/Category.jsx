import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/Product/ProductCard";
import { CategoryContainer, CategoryTitle } from "./style/Category.jsx";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

const Category = () => {
  const { category } = useParams();
  console.log("%cCategory useParams()", "Color: blue;", category);
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("%cCategory Component", "Color: red;", categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
