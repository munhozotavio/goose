import React from 'react';
import useToken from './useToken';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
    const {token, setToken} = useToken();
    return token ? children : <Navigate to="/login"/>
}

export default PrivateRoutes;