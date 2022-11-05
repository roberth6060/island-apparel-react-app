import CART_ACTION_TYPES from "./cartTypes";

/**NOTE - CART REDUCER THAT TRACKS USER CURRENT STATE  */

/**
 * INITIAL_STATE Object - gives object that needs to be tracked and what the reducer should return
 */
const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

/**
 *cartReducer Function - returns back an object
 * @param {*} state tracks current state (object)
 * @param {*} action action that will be taken
 * @param {*} type the data type
 * @param {*} payload stores value that lets reducer know what to update the state value with
 * @return object that will have values depending on the type
 */
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
