import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUSerDocumentFromAuth,
} from "../utils/firebase";
import { createAction } from "../utils/reducer";

/**NOTE - THIS CONTEXT IS USED TO STORE USER DATA */

/**
 * UserContext- Actual value that requires acccess by other child components:
 */
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

/**
 *userReducer Function - returns back an object
 * @param state tracks current state (object)
 * @param action action that will be taken
 * @param type the data type
 * @param payload stores value that lets reducer know what to update the state value with
 * @return object that will have values depending on the type
 */
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }; //new object that will spread through the previous state and update relevant values
    default:
      throw new Error(`Unhandle type ${type} in userReducer`);
  }
};

/**
 * UserProvider Function
 * @param children will have access to value inside useState()
 * @return UserContext.Provider that Will wrap around any components that needs access to data
 */
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null); // For reference
  /**
   *useReducer - reducer will be used instead of useContext to track current state
   * @param state current object being store by this reducer {currentUser}
   * @param dispatch function that receive action and pass action and run through the switch statement and update the reducer
   *
   */
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };
  /**
   * useEffect - runs function when Component Mount
   *@return unsubscribe function on unmount
   */
  useEffect(() => {
    /**
     * unsubscribe Function - add the ability to track if user is signin or signout - Open listener (always active)
     *@param user callback function that will execute when auth state changes
     */
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUSerDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
