import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USER_STORAGE_KEY = "oyc_user_session";
const ADMIN_STORAGE_KEY = "oyc_admin_session";

function getStoredSession(key) {
  const raw = localStorage.getItem(key);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => getStoredSession(USER_STORAGE_KEY));
  const [currentAdmin, setCurrentAdmin] = useState(() => getStoredSession(ADMIN_STORAGE_KEY));

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentAdmin) {
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(currentAdmin));
    } else {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  }, [currentAdmin]);

  const value = {
    currentUser,
    currentAdmin,
    loginUser: (user) => {
      setCurrentAdmin(null);
      setCurrentUser(user);
    },
    loginAdmin: (admin) => {
      setCurrentUser(null);
      setCurrentAdmin(admin);
    },
    logoutUser: () => setCurrentUser(null),
    logoutAdmin: () => setCurrentAdmin(null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
