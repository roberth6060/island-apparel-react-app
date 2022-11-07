import CATEGORY_ACTION_TYPES from "./categoryTypes";
import { createAction } from "../../utils/reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};

/**
 * tells application/redux store that categories are starting to be fetched
 */
export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

/**
 *  Redux Thunk - action creator function
 */
export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
