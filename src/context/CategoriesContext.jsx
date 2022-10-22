import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

//Context Value
export const CategoriesContext = createContext({
  categoriesMap: {},
  isWorking: true,
});

//Context Provider
export const CategoriesProvider = ({ children }) => {
  //Track current state:
  const [categoriesMap, setCategoriesMap] = useState({});

  console.log(categoriesMap);

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
  // });

  //Use to provide current state value to child of ProductContext.Provider
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
