import { Suspense } from "react";
import {
  Navbar,
  Home,
  Contact,
  Authentication,
  Checkout,
  CategoriesPreview,
  Category,
} from "./routes";

import GlobalStyle from "./GlobalStyle";
import { useApp } from "./useApp";
import Loading from "./components/common/Loading/Loading";

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

const App = () => {
  const { element } = useApp(routes);

  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      {element}
    </Suspense>
  );
};

export default App;
