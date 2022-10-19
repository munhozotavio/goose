import React from "react";
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
import useToken from './../App/useToken';
import { useState, useEffect } from 'react';
import "./pin.css";


export default function Map ({zoomLevel}) {
    const {token, setToken} = useToken();
    const [location, setLocation] = useState();

    useEffect(() => {
        handleLocation(token)
    }, []);

    const getLocation = async (credentials) => {
    
        return (fetch("http://localhost:8080/location", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(credentials)
        })).then(data => data.json());
    }

    const handleLocation = async (token) => {
        const location = await getLocation({access_token:token});
        setLocation(location);
    }

    if(!location) return

    return(
        <div className="map">
            <div className="gmap" height="60vh" width="100%">
                <GoogleMapReact bootstrapURLKeys={{key:location.apiKey}}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={location.center}
                defaultZoom={zoomLevel}>
                    <LocationPin lat={location.center.lat} lng={location.center.lng}/>
                </GoogleMapReact>
            </div>
        </div>
    )
}