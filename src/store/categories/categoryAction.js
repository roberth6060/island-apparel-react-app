import CATEGORY_ACTION_TYPES from "./categoryTypes";
import { createAction } from "../../utils/reducer";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
};
