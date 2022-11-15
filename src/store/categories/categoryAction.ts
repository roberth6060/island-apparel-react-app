import { CATEGORY_ACTION_TYPES, Category } from "./categoryTypes";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer";

// export const setCategories = (categoriesArray) => {
//   return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
// };

/**
 * tells application/redux store that categories are starting to be fetched
 */

export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type fetchCategoriesFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

//Create a union of types:
export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | fetchCategoriesFailed;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error: Error): fetchCategoriesFailed =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
