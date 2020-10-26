import React, { Component, useState, useEffect } from "react";
import {Route,Redirect,useLocation} from 'react-router-dom';
import {useAuth} from '../Firebase/AuthContext'
import Login from "./Login";

export default function PrivateRoute({children,...rest}) {
    const currentUser = useAuth();
    let location = useLocation();
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
            currentUser ? (
              children
            ) : (
              <Redirect
              to={{
                pathname: "/Login",
                state: { from: location }
              }}
            />
          )
        }
      />
         
    )
}
