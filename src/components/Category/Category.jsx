import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/Product/ProductCard";
import { CategoryContainer, CategoryTitle } from "./style/Category.jsx";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);

  // console.log(products);
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
