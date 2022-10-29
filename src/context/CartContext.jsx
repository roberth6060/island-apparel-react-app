import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer";

/**NOTE - CART CONTEXT TO KEEP TRACK OF ITEMS ADDED BY USER TO CART */

/**
 * addCartItem Function - used to add products to cart
 * @param {*} cartItems keeps track of current items in cart
 * @param {*} productToAdd potential product to be added to cartItems
 * @returns object with cartItems with new product and quantity or existing cartItems if productToAdd exists
 */
const addCartItem = (cartItems, productToAdd) => {
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
const removeItemFromCart = (cartItems, productToRemove) => {
  //Find the cart item to remove
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  //Check if quantity is equal to 1, if so remove item from the cart:
  if (cartItemExist.quantity === 1) {
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
const clearCartItem = (cartItems, cartItemToClear) => {
  //Remove cartItemToClear from cartitems (no matter the quantity)
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

/**
 * CartContext Function - stores initial state of values
 */
export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
});

/**
 * INITIAL_STATE Object - gives object that needs to be tracked and what the reducer should return
 */
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

/**
 *cartReducer Function - returns back an object
 * @param {*} state tracks current state (object)
 * @param {*} action action that will be taken
 * @param {*} type the data type
 * @param {*} payload stores value that lets reducer know what to update the state value with
 * @return object that will have values depending on the type
 */
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      new Error(`unhandled type of ${type} in cartReducer`);
  }
};

/**
 *Function - CartProvider
 * @param children will have access to value inside useState()
 * @return CartContext.Provider that gives the children access to value
 */
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  /**
   * updateCartItemReducer Function - dispatch new action with payload
   * @param newCartItems list of all current products
   * @param newCartCount gives the total number of products in cart
   * @param newCartTotal gives cost of product based on total quantity
   */
  const updateCartItemReducer = (newCartItems) => {
    //Generate newCartTotal
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    //Generate newCartCount
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  /**
   *  action Functions - to add, remove, clear item from cart or toggle cart
   */
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeItemFromCart(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };
  const clearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };
  const setIsCartOpen = (boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    cartItems,
    cartCount,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
