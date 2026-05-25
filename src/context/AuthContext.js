import { createContext, useEffect, useState } from "react";
import {
  getUserSession,
  removeUserSession,
  saveUserSession,
} from "../services/authStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    const session = await getUserSession();

    if (session) {
      setUser(session);
    }
  };

  const login = async (userData) => {
    setUser(userData);
    await saveUserSession(userData);
  };

  const logout = async () => {
    setUser(null);
    await removeUserSession();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
