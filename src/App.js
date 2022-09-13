import Home from "./components/routes/homepage/home.component";
import Navbar from "./components/routes/navbar/navbar.componet";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1> I am now shopping on this page</h1>;
};

//index = base component or index ={true}
const App = () => {
  //Homepage Layout:
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
