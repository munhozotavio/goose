import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import PropTypes from "prop-types";
// import { Navigate } from 'react-router-dom';

import "./Cars.css"
import useToken from './../App/useToken';

export default function Cars() {
    const [cars,setCars] = useState();
    const {token, setToken} = useToken();

    useEffect(()=> {
        handleCars()
    },[]);

    const getCars = async() => {
        return (fetch('http://localhost:8080/cars?' + new URLSearchParams({
            access_token:token
        }) ,{
            method:"GET",
        })).then(data =>data.json());
    }

    const handleCars =  async() => {
        const c = await getCars();
        setCars(c);
    }

    function card(car){
        const model = car.model;
        const plate = car.plate;
        const year = car.year;
        const color = car.color;

        return (
            <div className="col-2 ">
                <Card style={{ width: '12rem', display: 'flex', justifyContent: 'center'}}>
                    <Card.Body >
                        <Card.Title>{model}</Card.Title>
                        <Card.Subtitle classNameName="mb-2 text-muted">{plate}</Card.Subtitle>
                        <Card.Text>
                        {year}<br/>{color}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
    function cars_cards(){
        return( 
        <div className='container'  >
            {cars.map(car => card(car))}
        </div>
        )

    } 

    function cards_cad_button() {
        return (
            <div>
                <Button href="/cars_cad">Cadastrar novo veículo</Button>
            </div>
        )
    }

    if(!cars || !cars.length) return (
        <div>
            <br></br>
            {cards_cad_button()}
        </div>
    )
    
    return( 
        <div>
            <br/>
            {cards_cad_button()}
            <div style={{height:"25rem",display: 'flex', justifyContent: 'center'}}>    
                <Card >
                    <Card.Title className="ps-2 pt-2">Veículos</Card.Title>
                    <Card.Body style={{overflowY: 'auto'}}>{cars_cards()}</Card.Body>
                </Card>
            </div>
        </div>
    )
}