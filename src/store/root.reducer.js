import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { categoryReducer } from "./categories/categoryReducer";

/**NOTE - ROOT REDUCER COMBINE ALL REDUCERS INTO ONE GLOBAL STATE  */

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
});
