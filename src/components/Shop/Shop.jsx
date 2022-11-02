import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style/Shop.jsx";
// import { CategoriesPreview } from "../CategoriesPreview";
import { Category, CategoriesPreview } from "../../routes";
import { setCategoriesMap } from "../../store/categories/categoryAction";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocument,
} from "../../utils/firebase";
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

const Shop = () => {
  /**
   * NOTE - only one instance of dispatch from react-redux. Never updates, always the same reference
   */
  const dispatch = useDispatch();
  useEffect(() => {
    //Proper way to use async functions woth useEffect
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  /** NOTE the following useEffect sets new value inside firestore database */
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );

  // return <h1>YO</h1>;
};

export default Shop;
