import { CategoryItem } from "../categories";
import { CART_ACTION_TYPES, CartItem } from "./cartTypes";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer";

/**
 * addCartItem Function - used to add products to cart
 * @param {*} cartItems keeps track of current items in cart
 * @param {*} productToAdd potential product to be added to cartItems
 * @returns object with cartItems with new product and quantity or existing cartItems if productToAdd exists
 */
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  //Find if cartItems contains productToAdd (EXISTING PRODUCT):
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //If cartItemExist (TRUE) found, increment quanity:
  if (cartItemExist) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  //Return new array with modified cartItems (NEW PRODUCT):
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

/**
 * removeItemFromCart Function - used to remove item from cart
 * @param {*} cartItems keeps track of current items in cart
 * @param {*} productToRemove potential product to be removed from cartItems
 * @returns cartItems with decrease quantity or cartItems with removed product
 */
export const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  //Find the cart item to remove
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  //Check if quantity is equal to 1, if so remove item from the cart:
  if (cartItemExist && cartItemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  //Return cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

/**
 * clearCartItem Function - clear specific item from cart
 * @param {*} cartItems current cart with total products
 * @param {*} cartItemToClear product that needs to be removed
 * @return cartItems without a product from cartItemToClear
 */
const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  //Remove cartItemToClear from cartitems (no matter the quantity)
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

/**NOTE - Define each of the action as a type  */
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

/**
 *  action Functions - to add, remove, clear item from cart or toggle cart
 */
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
