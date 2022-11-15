import { Category, CATEGORY_ACTION_TYPES } from "./categoryTypes";
import { CategoryAction } from "./categoryAction";
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
  action = {} as CategoryAction // discriminated unions (3 types)
) => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: action.payload, isLoading: false };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
