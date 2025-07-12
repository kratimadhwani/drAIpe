import { createContext, useState, useContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // User state can be null or an object with user details
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access
export const useUser = () => useContext(UserContext);
