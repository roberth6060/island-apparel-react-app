import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUSerDocumentFromAuth,
} from "./utils/firebase";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
import GlobalStyle from "./GlobalStyle";
import { setCurrentUser } from "./store/user/user.action";

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
  /**
   * NOTE - only one instance of dispatch from react-redux. Never updates, always the same reference
   */
  const dispatch = useDispatch();
  useEffect(() => {
    /**
     * unsubscribe Function - add the ability to track if user is signin or signout - Open listener (always active)
     *@param user callback function that will execute when auth state changes
     */
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUSerDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]); //dependency NOT MANDATORY since state never changes

  const element = useRoutes(routes);
  return (
    <Suspense fallback={<div>Nothing ready</div>}>
      <GlobalStyle />
      {element}
    </Suspense>
  );
};

export default App;
