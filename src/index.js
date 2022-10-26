import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { CartProvider } from "./context/CartContext";
import Routes from "./routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
