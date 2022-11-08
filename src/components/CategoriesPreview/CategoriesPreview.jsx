import { Fragment } from "react";
import { useSelector } from "react-redux";
import DirectoryPreview from "../common/Directory/DirectoryPreview";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categorySelector";
import Spinner from "../common/Spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  // const dispatch = useDispatch();
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <DirectoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
