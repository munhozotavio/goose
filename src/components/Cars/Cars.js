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

    return( 
        <div class='container border'>

            <div class='row border'>
               <div class='col-4'>
                    <img src='download.jpeg' alt='carro' /> 
               </div>
               <div class="col-8">
                   <p>Modelo: Fiat Uno</p>
                   <p>Placa:XXXXXXXX</p>
                   <p>Ano: 2016</p>
               </div>
            </div>    
            <div class='row border'>
                <h2>2</h2>
            </div>   
            <div class='row border'>
                <h2>3</h2>
            </div>   
            
        </div>
        
    )
}