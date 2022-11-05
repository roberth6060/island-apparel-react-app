import { createSelector } from "reselect";
/**
 * Using memoization (cache data)
 */

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);
/**
 * Memoizated selector - prevents method from being rerun if categoriesArray does not change (returns previously calculated value)
 */
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
