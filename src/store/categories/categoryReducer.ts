import { CATEGORY_ACTION_TYPES } from "./categoryTypes";
import { CategoryAction } from "./categoryAction";
/**NOTE - CATEGORY REDUCER THAT TRACKS USER CURRENT STATE  */

const CATEGORIES_INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction // discriminated unions (3 types)
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: payload, isLoading: false };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
