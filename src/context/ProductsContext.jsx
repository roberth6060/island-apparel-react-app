import { createContext, useState } from "react";

import SHOP_DATA from "../data/shop/productsData";

//Context Value
export const ProductsContext = createContext({
  products: [],
});

//Context Provider
export const ProductsProvider = ({ children }) => {
  const text = SHOP_DATA[1].items;

  console.log(text);
  //Track current state:
  const [products] = useState(text);

  //Use to provide current state value to child of ProductContext.Provider
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
