import React from 'react';
import useToken from './useToken';
import { Navigate } from 'react-router-dom';
import Navigation from './../Navigation/Navigation';

function PrivateRoutes({ children }) {
    const {token, setToken} = useToken();
    return token ? <div><Navigation/> {children}</div> : <Navigate to="/login"/>
}

export default PrivateRoutes;