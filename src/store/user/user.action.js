import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../../utils/reducer";

/**
 * setCurrentUser Function - recieves a user object and creates and return a object where the type=SET_CURRENT_USER and value=user(payload)
 * @param {*} user object with user information
 */
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
