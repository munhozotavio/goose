import React from "react";
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";

import "./pin.css";


export default function Map (props) {

    if(!props.location || !props.apiKey) return

    const center = {
        lat:parseFloat(props.location.lat),
        lng:parseFloat(props.location.lng)
    }

    return(
        
        <div className="map">
            <div className="gmap" height="60vh" width="100%">
                <GoogleMapReact bootstrapURLKeys={{key:props.apiKey}}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={center}
                defaultZoom={props.zoomLevel}>
                    <LocationPin lat={center.lat} lng={center.lng}/>
                </GoogleMapReact>
            </div>
        </div>
    )
}