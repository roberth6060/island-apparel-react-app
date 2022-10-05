import { createContext, useState } from "react";

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
  //Every UserContext that gets built has .Provider(Will wrap around any components that needs access to data )
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
