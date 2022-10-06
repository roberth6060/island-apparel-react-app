import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUSerDocumentFromAuth,
} from "../components/utils/firebase/firebase.utils";

//NOTE context is used to store user data:

//Actual value that requires as acccess by other child components:
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//Always any of its children component to access the value inside its useState():
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //Run function when Component Mount:
  useEffect(() => {
    //Receives callback function that will execute when auth state changes (user signin or signout) - Open listener (always active) :
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUSerDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });
    //Unsubscribe on unmount:
    return unsubscribe;
  }, []);

  //Every UserContext that gets built has .Provider(Will wrap around any components that needs access to data )
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
