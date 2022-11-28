import React from "react";
import ProductCard from "../Product/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./styles/DirectoryPreview";
import{CategoryItem} from "../../../store/categories/categoryTypes"

type DirectoryPreviewProps ={
  title: string;
  products: CategoryItem[];
}
const DirectoryPreview: React.FC <DirectoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default DirectoryPreview;
