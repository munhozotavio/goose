import React from "react";
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";

import "./pin.css";


export default function Map (props) {

    if(!props.location) return

    return(
        
        <div className="map">
            <div className="gmap" height="60vh" width="100%">
                <GoogleMapReact bootstrapURLKeys={{key:props.location.apiKey}}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={props.location.center}
                defaultZoom={props.zoomLevel}>
                    <LocationPin lat={props.location.center.lat} lng={props.location.center.lng}/>
                </GoogleMapReact>
            </div>
        </div>
    )
}