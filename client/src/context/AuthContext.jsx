import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authuser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthContext.Provider value={{ authuser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
