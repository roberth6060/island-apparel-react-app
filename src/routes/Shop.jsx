import { Routes, Route } from "react-router-dom";
import "./scss/Shop.scss";
import CategoriesPreview from "./CategoriesPreview";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
