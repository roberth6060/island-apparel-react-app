import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./userTypes";
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from "./userAction";
import { UserData } from "../../utils/firebase";

/**NOTE - USER REDUCER THAT TRACKS USER CURRENT STATE  */
export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

/**
 *userReducer Function - returns back an object
 * @param state tracks current state (object). There needs to be a default state because there is no useReducer (hook)
 * @param action action that will be taken
 * @param type the data type
 * @param payload stores value that lets reducer know what to update the state value with
 * @return object that will have values depending on the type
 */
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
