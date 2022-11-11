import React, { useState } from "react";
import {Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Cars from '../Cars/Cars';
import Login from '../Login/Login';
import Cars_cad from '../Cars_cad/Cars_cad';
import useToken from "./useToken";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
 
function App(){
    const {token, setToken} = useToken();
    return(
        <div className="wrapper">
            <Routes>
                <Route exact path="/" element={<PrivateRoutes > <Navigate to="/dashboard" /> </PrivateRoutes>}/>
                <Route exact path="/login" element={<PublicRoutes> <Login setToken={setToken}/> </PublicRoutes>}/>
                <Route exact path="/dashboard" element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>}/>
                <Route exact path="/cars" element={<PrivateRoutes> <Cars /> </PrivateRoutes>}/>
                <Route exact path="/cars_cad" element={<PrivateRoutes><Cars_cad /></PrivateRoutes>}/>
            </Routes>
        </div>
    );
}

export default App;