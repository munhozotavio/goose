import React from "react";
import { Icon } from '@iconify/react'
import "./pin.css"


export default function LocationPin({ text }) {
    return (
        <div className="pin">
            <Icon icon="ant-design:car-outlined" width="32" height="32" />
            <p className="pin-text">{text}</p>
        </div>
    )
}