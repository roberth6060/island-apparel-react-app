import { useNavigate } from "react-router-dom";
import React from "react";
import {
  DirectoryContainer,
  BackgroundImage,
  BackgroundBody,
} from "./styles/DirectoryItems";
import {DirectoryCategory} from "./Directory"

type DirectoryItemsProps = {
  category: DirectoryCategory;
}

const DirectoryItems: React.FC <DirectoryItemsProps> = ({ category }) => {
  const navigate = useNavigate();
  const nagigateHandler = () => navigate(category.route);
  return (
    <DirectoryContainer onClick={nagigateHandler}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <BackgroundBody>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </BackgroundBody>
    </DirectoryContainer>
  );
};

export default DirectoryItems;
