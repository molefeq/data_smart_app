import React, { Component } from 'react';
import  authenticationService from '../services/authentication-service/authentication-service';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authenticationService.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

export default PrivateRoute;