import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import Authentication from "./routes/Authentication";
import Contact from "./routes/Contact";

import Shop from "./routes/Shop.jsx";
import "./index.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
  //Homepage Layout:
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
