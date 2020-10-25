
import React, { useContext, useState, useEffect } from "react";
import { auth, database,storage} from "./firebase";
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userdetails,setUserDetails] = useState(null);
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

  /* function createUserRec(){
    console.log(userdetails);
    if (userType==='sponsor'){
    axios
    .post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors", userdetails)
    .then(console.log("Successfully Posted"))
    .catch(error => console.log(error))}
  else {
    axios
    .post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charities", userdetails)
    .then(console.log("Successfully Posted"))
    .catch(error => console.log(error))}
  } */

  function writeUserData(userId, name, description, email, type,imageUrl,webUrl) {
    if (userType ==='charity'){
      userdetails = {
        charityId : userId,
        name: name,
        description: description,
        imageUrl: imageUrl,
        webUrl: webUrl
       }
       axios
       .post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charities", userdetails)
       .then(console.log("Successfully Posted"))
       .catch(error => console.log(error))
    }else{
      userdetails={
        sponsorId : userId,
        name: name,
        description: description,
        imageUrl: imageUrl,
        webUrl: webUrl}
        axios
    .post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors", userdetails)
    .then(console.log("Successfully Posted"))
    .catch(error => console.log(error))
    }
   // createUserRec();
    return database.ref('users/' + userId).set({
      username: name,
      description : description,
      email: email,
      type: type,
      imageUrl : imageUrl,
      webUrl : webUrl
    });
  }
  
 function readUserData(){
    var userId = currentUser.uid;
    return database.ref('/users/' + userId).once('value').then(function(snapshot) {
      setUserType(snapshot.val().type);
      
    }) 
  }
  
  function signalong(email, password,name, description, type,imageUrl,webUrl){
    try{
    signup(email, password).then(
    writeUserData(currentUser.uid, name, description, email, type,imageUrl,webUrl));
    }catch(e){
      console.log(e)
    }

  }
  function signnow(email, password){
    login(email, password);
    readUserData();
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
    logout,signalong,signnow
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
