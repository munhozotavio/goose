import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';



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
    
    if(!cars) return 
    
    // const cars = [{modelo:"Fiat Uno",placa:"ABC1234",ano:"2016",cor:"Preto"},
    // {modelo:"Corsa",placa:"DEF5678",ano:"2020",cor:"Prata"},
    // {modelo:"Onix",placa:"GHI9101",ano:"2021",cor:"Preto"}];
    return( 
        
        <div class='container square border border-5 col-2' >
            {cars.map(car => <div class='container' key={car}> <div class="row border"><p>Modelo: {car.modelo}</p>
                                                                     <p>Placa:{car.placa}</p>
                                                                     <p>Ano: {car.ano}</p>
                                                                     <p>Cor:{car.cor}</p> </div></div>)}
        </div>
    )
}