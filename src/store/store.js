import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
// import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "./middleware/logger";
import thunk from "redux-thunk";

/**NOTE - WHERE THE STATE LIVES AND WHERE ACTIONS ARE RECIEVED AND DISPATCH INTO REDUCERS TO UPDATE THE STATE  */

/**
 * Config object - tells what is wanted
 */
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

/**
 * For Redux dev tool extension in Google chrome
 */
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

/**
 * store - facilitate the movement and passing of actions through the reducers
 * @param rootReducer creates store
 * @param logger shows what the state looks like before a action is dispatch, what the action is, how the state looks after dispatch
 * @param middleware runs before an action hits the reducer
 */
// export const store = configureStore({
//   reducer: persistedReducer,
//   composedEnhancers,
//   // middleware: composedEnhancers,
// });

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
