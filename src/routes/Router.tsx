
import { useRoutes } from "react-router-dom";

import {
  Navbar,
  Home,

  Authentication,
  Checkout,
  CategoriesPreview,
  Category,
} from ".";

 const Router = () => {
const routes = [
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

  const element = useRoutes(routes);

 

  return { element };
};

export default Router;