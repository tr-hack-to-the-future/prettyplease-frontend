
import React, { useContext, useState, useEffect } from "react";
import { auth, database,storage} from "./firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout(){
    return auth.signOut();
  }
  function writeUserData(userId, name, description, email, type,imageUrl) {
    return database.ref('users/' + userId).set({
      username: name,
      description : description,
      email: email,
      type: type,
      profile_picture : imageUrl
    });
  }
  function signalong(email, password,name, description, type,imageUrl){
    signup(email, password);
    writeUserData(currentUser.uid, name, description, email, type,imageUrl)

  }
  
 // const user = uid => db.ref(`users/${uid}`);
 
  //const users = () =>db.ref('users');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    signup,
    login,
    logout,signalong,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
