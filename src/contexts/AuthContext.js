import React, { useContext, useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../components/firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const hist = useHistory();

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if(user){
  hist.push("/chats");
      }
    
    });
  }, [user, hist]);

  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* this lines of code  mean if we are not loading then show the children */}
    </AuthContext.Provider>
  );
};
