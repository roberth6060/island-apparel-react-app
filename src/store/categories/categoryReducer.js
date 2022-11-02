import CATEGORY_ACTION_TYPES from "./categoryTypes";
/**NOTE - CATEGORY REDUCER THAT TRACKS USER CURRENT STATE  */

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, category: payload }; //new object that will spread through the previous state and update relevant values
    default:
      return state;
  }
};
