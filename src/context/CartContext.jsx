import { createContext, useState, useEffect } from "react";

/************* NOTE MUST CREATE NEW CARTSITEM OBJECT FOR REACT TO RERENDER  **************/
//Helper function:
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

const clearCartItem = (cartItems, cartItemToClear) => {
  //Remove cartItemToClear from cartitems (no matter the quantity)
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  //Will gain access to the following data using CartContext:
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //Track total counts:
  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(totalQuantity);
  }, [cartItems]);

  //Track total cash:
  useEffect(() => {
    const cartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(cartTotal);
  }, [cartItems]);

  //Add Items to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  //Remove Items from cart
  const removeItemToCart = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };
  //Clear Items from cart
  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
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
