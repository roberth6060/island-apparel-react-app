import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cartAction";
import { CartItem } from "./cartTypes";

/**NOTE - CART REDUCER THAT TRACKS USER CURRENT STATE  */

/**
 * INITIAL_STATE Object - gives object that needs to be tracked and what the reducer should return
 */
export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};
const CART_INITIAL_STATE: CartState = {
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
export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
