import {
  DirectoryContainer,
  BackgroundImage,
  BackgroundBody,
} from "./styles/DirectoryItems";

const CategoryItems = ({ category }) => (
  <DirectoryContainer key={category.id}>
    <BackgroundImage imageUrl={category.imageUrl} />
    <BackgroundBody>
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </BackgroundBody>
  </DirectoryContainer>
);

export default CategoryItems;
