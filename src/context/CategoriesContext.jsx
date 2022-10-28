import { createContext, useEffect, useState } from "react";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocument,
} from "../utils/firebase";

// import SHOP_DATA from "../data/shop/productsData";

// SHOP_DATA.forEach((data) => {
//   //Create women and men category that will update in firebase db
//   if (data.title === "Shirts") {
//     const men = data.items.filter((val) => val.gender === "Men");
//     const women = data.items.filter((val) => val.gender === "Women");
//     SHOP_DATA[4].items.push(...men);
//     SHOP_DATA[3].items.push(...women);
//   }
//   if (data.title === "Jackets") {
//     const men = data.items.filter((val) => val.gender === "Men");
//     const women = data.items.filter((val) => val.gender === "Women");
//     SHOP_DATA[4].items.push(...men);
//     SHOP_DATA[3].items.push(...women);
//   }
// });

//Context Value
export const CategoriesContext = createContext({
  categoriesMap: {},
  isWorking: true,
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
