import { createContext, useState, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Create Context.
const AuthContext = createContext();
// Provider Context.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //signin with googel.
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  // signout
  const logout = ()=> signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout
  };

  // set current user.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{! loading && children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
