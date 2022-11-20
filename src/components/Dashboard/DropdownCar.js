import React from "react";
import { useState, useEffect } from 'react';
import useToken from './../App/useToken';

import Form from 'react-bootstrap/Form';

export default function DropdownCar(props) {
    const {token, setToken} = useToken();
    const [carList, setCarList] = useState();

    useEffect(() => {
        handleCarList(token)
    }, []);

    const getCarList = async (credentials) => {
    
        return (fetch("http://localhost:8080/cars?" + new URLSearchParams({
            access_token: token
        }), {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })).then(data => data.json());
    }

    const handleCarList = async (token) => {
        const cars = await getCarList({access_token:token});
        setCarList(cars);
    }

    if(!carList) return

    return (
        <Form.Select aria-label="Select test" onChange={(e) => props.onChange(e)}>
            <option selected value= '' disabled={true} hidden></option>
            {
                carList.map((e,index) => {
                    return <option key={index} value={e.plate}>{e.plate}</option>
                })
            }
        </Form.Select>
    )
}