import { Fragment, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import DirectoryPreview from "../components/Directory/DirectoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
