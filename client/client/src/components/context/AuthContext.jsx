import { createContext, useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { signOut } from "../../api/auth.api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [switchLog, setSwitchLog] = useState(true);
  const initialUser = useLoaderData();
  const [userConnected, setUserConnected] = useState(initialUser);

  console.log(userConnected);
  const login = async (values) => {
    setUserConnected(values);
  };

  const logout = async () => {
    await signOut();
    setUserConnected(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userConnected,
        login,
        logout,
        switchLog,
        setSwitchLog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
