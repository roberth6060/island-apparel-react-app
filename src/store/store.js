import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

/**NOTE - WHERE THE STATE LIVES AND WHERE ACTIONS ARE RECIEVED AND DISPATCH INTO REDUCERS TO UPDATE THE STATE  */

/**
 * store - facilitate the movement and passing of actions through the reducers
 * @param rootReducer creates store
 * @param logger shows what the state looks like before a action is dispatch, what the action is, how the state looks after dispatch
 * @param middleware runs before an action hits the reducer
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

/**NOTE - OLD VERSION - CAN BE DELETED. REACT 17 VERSION - ONLY FOR REFERENCE  */
// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";
// import logger from "redux-logger";
// import { rootReducer } from "./root.reducer";

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
