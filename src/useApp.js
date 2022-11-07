import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUSerDocumentFromAuth,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/userAction";
import { fetchCategoriesAsync } from "./store/categories/categoryAction";
export const useApp = (routes) => {
  /**
   * NOTE - only one instance of dispatch from react-redux. Never updates, always the same reference
   */
  const dispatch = useDispatch();
  const element = useRoutes(routes);
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

    //dispatch categories with Thunk
    dispatch(fetchCategoriesAsync());

    //Dispatch categories to redux store
    return unsubscribe;
  }, [dispatch]); //dependency NOT MANDATORY since state never changes

  return { element };
};
