import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
import GlobalStyle from "./GlobalStyle";

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

const App = () => {
  const element = useRoutes(index);
  return (
    <Suspense fallback={<div>Nothing ready</div>}>
      <GlobalStyle />
      {element}
    </Suspense>
  );
};

export default App;
