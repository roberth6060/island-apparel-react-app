import { useNavigate } from "react-router-dom";
import {
  DirectoryContainer,
  BackgroundImage,
  BackgroundBody,
} from "./styles/DirectoryItems";

const DirectoryItems = ({ category }) => {
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
