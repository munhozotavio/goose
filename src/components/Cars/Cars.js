import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import PropTypes from "prop-types";
// import { Navigate } from 'react-router-dom';

import "./Cars.css"

export default function Cars() {
    const [cars,setCars] = useState();

    useEffect(()=> {
        handleCars()
    },[]);

    const getCars = async() => {
        return (fetch('http://localhost:8080/cars',{
            method:"GET",
        })).then(data =>data.json());
    }

    const handleCars =  async() => {
        const c = await getCars();
        setCars(c);
    }

    function card(car){
        const modelo = car.modelo;
        const placa = car.placa;
        const ano = car.ano;
        const cor = car.cor;

        return (
            <div class="col-2 ">
                <Card style={{ width: '12rem', display: 'flex', justifyContent: 'center'}}>
                    <Card.Body >
                        <Card.Title>{modelo}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{placa}</Card.Subtitle>
                        <Card.Text>
                        {ano}<br/>{cor}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
    function cars_cards(){
        return( 
        <div class='container'  >
            {cars.map(car => card(car))}
        </div>
        )

    } 
    
    if(!cars) return 
    
    return( 
        <div style={{height:"25rem",display: 'flex', justifyContent: 'center'}}>
            
            <Card >
                <Card.Title>Veículos</Card.Title>
                <Card.Body style={{overflowY: 'auto'}}>{cars_cards()}</Card.Body>
            </Card>
        </div>
    )
}