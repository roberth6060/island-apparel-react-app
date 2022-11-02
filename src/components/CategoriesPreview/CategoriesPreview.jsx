import { Fragment } from "react";
import { useSelector } from "react-redux";
import DirectoryPreview from "../common/Directory/DirectoryPreview";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);

  console.log("first");
  console.log(categoriesMap);
  console.log("second");
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <DirectoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
