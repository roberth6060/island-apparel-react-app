import { createContext, useEffect, useState } from "react";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocument,
} from "../utils/firebase";

//Context Value
export const CategoriesContext = createContext({
  categoriesMap: {},
});

//Context Provider
export const CategoriesProvider = ({ children }) => {
  //Track current state:
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    //Proper way to use async functions woth useEffect
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  /** NOTE the following useEffect sets new value inside firestore database */
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  //Use to provide current state value to child of ProductContext.Provider
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
