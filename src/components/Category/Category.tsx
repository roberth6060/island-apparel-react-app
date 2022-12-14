import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/Product/ProductCard";
import { CategoryContainer, CategoryTitle } from "./style/Category";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categorySelector";
import Spinnner from "../common/Spinner/Spinner";


type CategoryRouteParams = {
  category: string;
}
const Category = () => {
  const { category } = useParams <keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinnner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
