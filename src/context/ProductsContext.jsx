import { createContext, useState } from "react";
import PRODUCTS from "../data/shop/hatsItems.json";

//Context Value
export const ProductsContext = createContext({
  products: [],
});

//Context Provider
export const ProductsProvider = ({ children }) => {
  //Track current state:
  const [products] = useState(PRODUCTS);

  //Use to provide current state value to child of ProductContext.Provider
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
