import React from "react";
import CategoryItems from "./DirectoryItems";
import homeItems from "../../data/home/homeItems";
import { CategoriesContainer } from "./styles/Categories";

const Categories = () => (
  <CategoriesContainer>
    {homeItems.map((category) => (
      <CategoryItems key={category.id} category={category} />
    ))}
  </CategoriesContainer>
);

export default Categories;
