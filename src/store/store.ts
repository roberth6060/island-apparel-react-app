import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
  Middleware,
} from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { logger } from "./middleware/logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

/**NOTE - WHERE THE STATE LIVES AND WHERE ACTIONS ARE RECIEVED AND DISPATCH INTO REDUCERS TO UPDATE THE STATE  */

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter((middleWare): middleWare is Middleware => Boolean(middleWare));

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
/*-TODO - update from createStore to configureStore */
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

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
