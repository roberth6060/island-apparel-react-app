import { combineReducers } from "redux";
import { userReducer } from "./user";

/**NOTE - ROOT REDUCER COMBINE ALL REDUCERS INTO ONE GLOBAL STATE  */

export const rootReducer = combineReducers({
  user: userReducer,
});
