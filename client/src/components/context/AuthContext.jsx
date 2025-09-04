import { createContext, useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [userConnected, setUserConnected] = useState(initialUser);

  console.log(userConnected);
  const login = async (values) => {
    setUserConnected(values);
  };

  const logout = () => {
    setUserConnected(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userConnected,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
