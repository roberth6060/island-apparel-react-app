import USER_ACTION_TYPES from "./userTypes";
import { createAction } from "../../utils/reducer";

/**
 * setCurrentUser Function - recieves a user object and creates and return a object where the type=SET_CURRENT_USER and value=user(payload)
 * @param {*} user object with user information
 */
export const setCurrentUser = () =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
/**
 * email and password will passthrough as payload inside of an object
 * @param  email user email address used to sign in
 * @param  password user created password
 */
export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);
