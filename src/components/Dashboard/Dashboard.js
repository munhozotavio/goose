import React from "react";
import Map from "./Map";

export default function Dashboard() {


    return (
        <div  height="60vh" width="100%">
            <h2>Dashboard</h2>
            <Map zoomLevel={17} />
        </div>
    )
}