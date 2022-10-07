import Navbar from "./components/routes/navbar/navbar.componet";
import Home from "./components/routes/homepage/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Contact from "./components/routes/contact/contact.component";
import Cart from "./components/routes/cart/cart.component";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/routes/shop/shop.component.jsx";

//index = base component or index ={true}
const App = () => {
  //Homepage Layout:
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
