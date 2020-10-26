import React, { useContext, useState, useEffect } from "react";
import { auth, database, storage } from "./firebase";
import axios from "axios";

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
  function logout() {
    return auth.signOut();
  }
  function signalong(
    emailid,
    password,
    name,
    description,
    email,
    type,
    imageUrl,
    webUrl
  ) {
    setUserType(type);

    auth.createUserWithEmailAndPassword(emailid, password).then((authUser) => {
      console.log(userType)
      if (type === "charity") {
        const userdetails = {
          charityId: authUser.user.uid,
          name: name,
          description: description,
          imageUrl: imageUrl,
          webUrl: webUrl,
        };

        axios
          .post(
            "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charities",
            userdetails
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      } else {
        const userdetails = {
          sponsorId: authUser.user.uid,
          name: name,
          description: description,
          imageUrl: imageUrl,
          webUrl: webUrl,
        };

        axios
          .post(
            "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors",
            userdetails
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }

      // Create a user in your Firebase realtime database
      return database.ref("users/" + authUser.user.uid).set({
        name,
        description,
        email,
        type,
        imageUrl,
        webUrl,
      });
    });
  }

  /* 
    let userrec = {
      sponsorId : "SPON24889999999",
      name: "Postman's Horse Farm Organisation",
      description: "Etiam vel nisi lacinia, luctus turpis et, rutrum ipsum. ",
      imageUrl: "./assets/images/abstract-logo1.jpg",
      webUrl: "test post web url"
  }
  axios
    .post("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors", userrec)
    .then(console.log("Successfully Posted dummy data"))
    .catch(error => console.log(error)); */

  function readUserData() {
    let userId = currentUser.uid;
    return database
      .ref("/users/" + userId)
      .once("value")
      .then(function (snapshot) {
        setUserType(snapshot.val().type);
      });
  }

  function signnow(email, password) {
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
    logout,
    signup,
    signnow,
    signalong,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
