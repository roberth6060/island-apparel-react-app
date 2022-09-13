import Home from "./components/routes/homepage/home.component";

import "./App.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
  //Homepage Layout:
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
