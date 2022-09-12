import React from "react";
import CategoryItems from "../category-item/category-item-component";
import categories from "../items-data-component/items-data-component";

const Categories = () => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItems key={category.id} category={category} />
    ))}
  </div>
);

export default Categories;
