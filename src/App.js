import Navbar from "./components/routes/navbar/navbar.componet";
import Home from "./components/routes/homepage/home.component";
import Signin from "./components/routes/sign-in/sign-in.component";
import Contact from "./components/routes/contact/contact.component";
import Cart from "./components/routes/cart/cart.component";
import "./index.scss";
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
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
