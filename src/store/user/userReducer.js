import USER_ACTION_TYPES from "./userTypes";

/**NOTE - USER REDUCER THAT TRACKS USER CURRENT STATE  */

const INITIAL_STATE = {
  currentUser: null,
};

/**
 *userReducer Function - returns back an object
 * @param state tracks current state (object). There needs to be a default state because there is no useReducer (hook)
 * @param action action that will be taken
 * @param type the data type
 * @param payload stores value that lets reducer know what to update the state value with
 * @return object that will have values depending on the type
 */
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }; //new object that will spread through the previous state and update relevant values
    default:
      return state;
  }
};
