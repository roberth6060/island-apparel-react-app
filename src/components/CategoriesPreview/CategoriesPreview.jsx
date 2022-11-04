import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import DirectoryPreview from "../common/Directory/DirectoryPreview";
import { selectCategoriesMap } from "../../store/categories/categorySelector";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { setCategories } from "../../store/categories/categoryAction";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const dispatch = useDispatch();

  useEffect(() => {
    //Proper way to use async functions woth useEffect
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

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
