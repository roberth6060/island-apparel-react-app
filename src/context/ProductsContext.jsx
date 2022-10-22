import { createContext, useState } from "react";
// import { addCollectionAndDocument } from "../utils/firebase";
// import SHOP_DATA from "../data/shop/productsData";

//Context Value
export const ProductsContext = createContext({
  products: [],
});

//Context Provider
export const ProductsProvider = ({ children }) => {
  //Track current state:
  const [products, setProducts] = useState([]);

  /** NOTE the following useEffect sets new value inside firestore database */
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // });
  //Use to provide current state value to child of ProductContext.Provider
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
