"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { storage } from "@/utils/LocalStorage";
import Loading from "@/components/Loading";

export const ContextAuth = createContext(null);

export function ContextAuthProvider({ children }) {
  const [user, setUser] = useState(() => storage.get("dataUser"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!storage.get("dataUser"));
  const [loading, setLoading] = useState(true);

  const login = (user_data) => {
    setUser(user_data);
    storage.set("dataUser", user_data);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    storage.remove("dataUser");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const saveTokens = (refreshToken, token) => {
    storage.set("refreshToken", refreshToken);
    storage.set("token", token);
  };

  const value = useMemo(() => ({
    user, 
    isLoggedIn, 
    login, 
    logout, 
    saveTokens,
  }), [user, isLoggedIn]);

  useEffect(() => {
    const new_user = storage.get("dataUser");
    if (new_user) {
      setUser(new_user);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>;
}

export function useContextAuth() {
  const context = useContext(ContextAuth);
  if (!context) {
    throw new Error("useContextAuth must be used within a ContextAuthProvider");
  }
  return context;
}
