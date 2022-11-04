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
import Loading from "./components/Loading/Loading";
// import PuffLoader from "react-spinners/PuffLoader";

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
  /**TODO - loading animation with react spinners */
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const { element } = useApp(routes);

  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      {element}
    </Suspense>
  );
};

export default App;
