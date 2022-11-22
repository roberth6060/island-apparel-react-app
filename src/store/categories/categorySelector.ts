import { createSelector } from "reselect";
import { CategoriesState } from "./categoryReducer";
import { CategoryMap } from "./categoryTypes";
import { RootState } from "../store";

/**
 * Using memoization (cache data)
 */

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

/**
 * Memoizated selector - prevents method from being rerun if categoriesArray does not change (returns previously calculated value)
 */
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
