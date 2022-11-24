import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categorySaga";
import { userSagas } from "./user/userSaga";
/**
 * Used to incapsulate all the different sagas
 */
/**
 * Export generator function (ES6)*
 */
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
