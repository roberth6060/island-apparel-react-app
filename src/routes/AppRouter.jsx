import { useRoutes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Authentication from "./Authentication";
import Checkout from "./Checkout";
import { Suspense } from "react";

const index = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop/*",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
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

const AppRouter = () => {
  const element = useRoutes(index);
  return <Suspense fallback={<div>Nothing ready</div>}>{element}</Suspense>;
};

export default AppRouter;
