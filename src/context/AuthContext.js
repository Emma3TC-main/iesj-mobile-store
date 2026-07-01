import { createContext, useEffect, useState } from "react";
import { meRequest } from "../api/authApi";
import {
  getUserSession,
  removeUserSession,
  saveUserSession,
} from "../services/authStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    try {
      const session = await getUserSession();

      if (session?.token) {
        setToken(session.token);
        setUser(session.user);

        // Validación real del JWT contra el backend.
        const freshUser = await meRequest();
        setUser(freshUser);
        await saveUserSession({ token: session.token, user: freshUser });
      }
    } catch (error) {
      await removeUserSession();
      setUser(null);
      setToken(null);
    } finally {
      setBooting(false);
    }
  };

  const login = async (session) => {
    setUser(session.user);
    setToken(session.token);
    await saveUserSession(session);
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await removeUserSession();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        booting,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
