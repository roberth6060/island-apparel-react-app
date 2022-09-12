// import React from "react";
import Navbar from "./components/navbar-component/navbar-componet.jsx";
import Categories from "./components/categories-component/categories-component.jsx";
import "./App.scss";

const App = () => {
  //Homepage Layout:
  return (
    <div className="main-container">
      <Navbar />
      <Categories />
    </div>
  );
};

export default App;
