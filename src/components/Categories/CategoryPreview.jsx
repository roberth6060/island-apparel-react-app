import ProductCard from "../Product/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./styles/CategoryPreview";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title as="h2" to={title}>
        {title.toUpperCase()}
      </Title>

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

export default CategoryPreview;
