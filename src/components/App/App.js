import React, { useState } from "react";
import {Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Cars from '../Cars/Cars';
import Login from '../Login/Login'
import useToken from "./useToken";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
 
function App(){
    const {token, setToken} = useToken();
    return(
        <div className="wrapper">
            <Helmet>
                <title>UniRadar</title>
            </Helmet>
            <Routes>
                <Route exact path="/" element={<PrivateRoutes > <Navigate to="/dashboard" /> </PrivateRoutes>}/>
                <Route exact path="/login" element={<PublicRoutes> <Login setToken={setToken}/> </PublicRoutes>}/>
                <Route exact path="/dashboard" element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>}/>
                <Route exact path="/cars" element={<PrivateRoutes> <Cars /> </PrivateRoutes>}/>
            </Routes>
        </div>
    );
}

export default App;