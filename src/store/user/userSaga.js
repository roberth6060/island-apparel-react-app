import { takeLatest, all, call, put } from "redux-saga/effects";
import USER_ACTION_TYPES from "./userTypes";
import { signInSuccess, signInFailed } from "./userAction";
import {
  getCurrentUser,
  createUSerDocumentFromAuth,
} from "../../utils/firebase";

/**NOTE - All of firebase signin, signup with google or with email and passsword will flow through this saga  */

/**Method- will be called once the userAuth object is received  */
export function* getSnapshotFromUserAuth(userAuth, addtionalDetails) {
  try {
    const userSnapshot = yield call(
      createUSerDocumentFromAuth,
      userAuth,
      addtionalDetails
    );

    console.log("%cuserSnapshot", "Color: red;", userSnapshot);
    console.log("%cuserSnapshot.data()", "Color: pink;", userSnapshot.data());

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
