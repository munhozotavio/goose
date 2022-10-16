import React from 'react';
import useToken from './useToken';
import { Navigate } from 'react-router-dom';

function PublicRoutes({ children }) {
    const {token, setToken} = useToken();
    return !token ? children : <Navigate to="/dashboard"/>
}

export default PublicRoutes;