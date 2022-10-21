import { createContext, useState, useEffect } from "react";

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

//CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  //Will gain access to the following data using CartContext:
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //Track total counts:
  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(totalQuantity);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
