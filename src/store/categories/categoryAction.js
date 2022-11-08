import CATEGORY_ACTION_TYPES from "./categoryTypes";
import { createAction } from "../../utils/reducer";

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
