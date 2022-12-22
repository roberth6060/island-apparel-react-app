import { Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "./store/categories/categoryAction";
import { checkUserSession } from "./store/user/userAction";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";
import Spinner from "./components/common/Spinner/Spinner";



const App: React.FC = () => {
   /**
   * NOTE - only one instance of dispatch from react-redux. Never updates, always the same reference
   */
  const dispatch = useDispatch();
  // const {element} = Router();
  useEffect(() => {
    //dispatch user
    dispatch(checkUserSession());

    //dispatch categories
    dispatch(fetchCategoriesStart());
  }, [dispatch]); //dependency NOT MANDATORY since state never changes

  return (
    <Suspense fallback={<Spinner/>}>
      <GlobalStyle />
      <Routes/>
    </Suspense>
  );
};

export default App;
