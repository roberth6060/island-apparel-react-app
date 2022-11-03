import CATEGORY_ACTION_TYPES from "./categoryTypes";
/**NOTE - CATEGORY REDUCER THAT TRACKS USER CURRENT STATE  */

const CATEGORIES_INITIAL_STATE = {
  categoriesArray: [],
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesArray: payload }; //new object that will spread through the previous state and update relevant values
    default:
      return state;
  }
};
