import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**NOTE - WHERE THE STATE LIVES AND WHERE ACTIONS ARE RECIEVED AND DISPATCH INTO REDUCERS TO UPDATE THE STATE  */

const middleWareLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("%ctype: ", "Color: pink;", action.type);
  next(action);
  console.log("%caction", "Color: red;", store.getState());
};

/**
 * Config object - tells what is wanted
 */
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
/**
 * store - facilitate the movement and passing of actions through the reducers
 * @param rootReducer creates store
 * @param logger shows what the state looks like before a action is dispatch, what the action is, how the state looks after dispatch
 * @param middleware runs before an action hits the reducer
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [middleWareLogger],
});

export const persistor = persistStore(store);
