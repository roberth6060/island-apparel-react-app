import CATEGORY_ACTION_TYPES from "./categoryTypes";
import { createAction } from "../../utils/reducer";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
