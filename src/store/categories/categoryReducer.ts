import { AnyAction } from "redux";
import { Category } from "./categoryTypes";
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categoryAction";
/**NOTE - CATEGORY REDUCER THAT TRACKS USER CURRENT STATE  */

export type CategoriesState = {
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categoriesArray: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
