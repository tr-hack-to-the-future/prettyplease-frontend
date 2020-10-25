
import React, { useContext, useState, useEffect } from "react";
import { auth, database,storage} from "./firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
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
  async function readUserData(){
    var userId = currentUser.uid;
    return database.ref('/users/' + userId).once('value').then(function(snapshot) {
      setUserType(snapshot.val().type);
      
    }) 
  }
  function signalong(email, password,name, description, type,imageUrl){
    signup(email, password);
    writeUserData(currentUser.uid, name, description, email, type,imageUrl);

  }
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    userType,
    signup,
    login,
    logout,signalong,readUserData
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
