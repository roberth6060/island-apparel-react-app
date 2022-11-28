import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import { fetchCategoriesStart } from "./store/categories/categoryAction";
import { checkUserSession } from "./store/user/userAction";

export const useApp = (routes) => {
  /**
   * NOTE - only one instance of dispatch from react-redux. Never updates, always the same reference
   */
  const dispatch = useDispatch();
  const element = useRoutes(routes);

  useEffect(() => {
    //dispatch user
    dispatch(checkUserSession());

    //dispatch categories
    dispatch(fetchCategoriesStart());
  }, [dispatch]); //dependency NOT MANDATORY since state never changes

  return { element };
};
