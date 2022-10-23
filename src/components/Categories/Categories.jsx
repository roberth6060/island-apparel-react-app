import React from "react";
import CategoryItems from "./DirectoryItems";
import homeItems from "../../data/home/homeItems";
import "./scss/Categories.scss";

const Categories = () => (
  <div className="categories-container">
    {homeItems.map((category) => (
      <CategoryItems key={category.id} category={category} />
    ))}
  </div>
);

export default Categories;
