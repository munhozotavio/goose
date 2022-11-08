import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';



export default function Cars() {

    async function loginUser(credentials) {
        return(fetch("http://localhost:8080/cars", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify()
        })).then(data => data.json());
        
    }
    const cars = [{modelo:"Fiat Uno",placa:"ABC1234",ano:"2016",cor:"Preto"},
    {modelo:"Corsa",placa:"DEF5678",ano:"2020",cor:"Prata"},
    {modelo:"Onix",placa:"GHI9101",ano:"2021",cor:"Preto"}];
    


    //  function dashboard (){
    //     const cars = [{modelo:"Fiat Uno",placa:"ABC1234",ano:"2016",cor:"Preto"},
    //             {modelo:"Corsa",placa:"DEF5678",ano:"2020",cor:"Prata"},
    //             {modelo:"Onix",placa:"GHI9101",ano:"2021",cor:"Preto"}];
    //     return(
    //         <div>
    //             {this.cars.map(car => <div key={car}>car.modelo </div>)}
    //         </div>
    //     )

    // }

    return( 
        <div class='container col-2' >
            
                 {cars.map(car => <div class='row' key={car}> <div class="border square rounded-pill "><p>Modelo: {car.modelo}</p>
                                                                     <p>Placa:{car.placa}</p>
                                                                     <p>Ano: {car.ano}</p>
                                                                     <p>Cor:{car.cor}</p> </div></div>)}
        </div>
       

        // <div class='container border col-2'>

        //     <div class='row border'>
               
        //        <div class="col-8 ">
        //            <p>Modelo: Fiat Uno</p>
        //            <p>Placa:XXXXXXXX</p>
        //            <p>Ano: 2016</p>
        //        </div>
        //     </div>    
        //     <div class='row border'>
        //         <h2>2</h2>
        //     </div>   
        //     <div class='row border'>
        //         <h2>3</h2>
        //     </div>   
            
        // </div>
        
    )
}