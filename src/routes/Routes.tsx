
import { useRoutes } from "react-router-dom";
import { lazy } from "react";
// import {
//   Navbar,
//   Checkout,
//   CategoriesPreview,
//   Category,
// } from ".";

const Home = lazy (()=> import ("../components/Home/Home"));
const Authentication = lazy (()=> import ("../components/Authentication/Authentication"));
const Navbar = lazy (()=> import ("../components/Navbar/Navbar"));
const CategoriesPreview = lazy (()=> import ("../components/CategoriesPreview/CategoriesPreview"));
const Category = lazy (()=> import ("../components/Category/Category"));
const Checkout = lazy (()=> import ("../components/Checkout/Checkout"));

const routes = [
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop/*",
        children: [
          {
            index: true,
            element: <CategoriesPreview />,
          },
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default Routes;