import React,{Component} from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "./Login";

import { useAuth } from '../Firebase/AuthContext'

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {

    let {currentUser} = useAuth();
    let user = ( currentUser== null)? false : true
    return (
        <Route
            path={path}
            render={props => 
                !Boolean(user) ? (
                    <Redirect
                        to={{ pathname: "/Login" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}

export default AppRoutes