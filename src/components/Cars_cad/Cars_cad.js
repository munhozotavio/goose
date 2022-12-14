import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import useToken from './../App/useToken';



import './Cars_cad.css';

export default function Cars_cad(){
    const [modelo,setModelo] = useState("");
    const [placa,setPlaca] = useState("");
    const [cor,setCor] = useState("");
    const [ano,setAno] = useState("");
    const [foto,setFoto] = useState("");
    const [flag,setFlag] = useState(false)
    const {token, setToken} = useToken();


    const postForm = async() => {
        const values = {
            plate:placa,
            model:modelo,
            color:cor,
            year: ano,
            access_token:token
        }

        return (fetch('http://localhost:8080/cars',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify(values)
        })).then(data =>data.json());
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const message = await postForm();
        alert(message)
        if (message == "Veículo cadastrado com sucesso!") {
            window.location.href="/cars"
        }
    }

    const validateForm = () => {
        return modelo.length > 0 && placa.length > 0 && cor.length > 0 && ano.length > 0
    }

    const handlerFoto = (event) =>{
        setFoto(event.target.files[0])
        setFlag(true)
    }

    return (
      
            <div class="container ">
                

                <div class="row d-flex align-items-center justify-content-center center-screen">
                    <div class='col-sm-4 border border-info rounded'> 
                        <Form  class='row'  onSubmit={handleSubmit}>
                            <Form.Group class='space-form' controlId="formModelo">
                                <Form.Label>Cadastro de Veículo</Form.Label>
                                <Form.Control autoFocus type='modelo' placeholder='Modelo' value={modelo} onChange={(e)=>setModelo(e.target.value)} />
                            </Form.Group>
                            <Form.Group class='space-form'controlId="formPlaca">
                                {/* <Form.Label>Placa</Form.Label> */}
                                <Form.Control autoFocus type='placa' placeholder='Placa' value={placa} onChange={(e)=>setPlaca(e.target.value)} />
                            </Form.Group>
                            <Form.Group class='space-form' controlId="formCor">
                                {/* <Form.Label>Cor</Form.Label> */}
                                <Form.Control autoFocus type='cor' placeholder='Cor' value={cor} onChange={(e)=>setCor(e.target.value)} />
                            </Form.Group>
                            <Form.Group class='space-form' controlId="formAno">
                                {/* <Form.Label>Ano</Form.Label> */}
                                <Form.Control autoFocus type='ano' placeholder='Ano' value={ano} onChange={(e)=>setAno(e.target.value)} />
                            </Form.Group>
                            {/* <div class='space'>
                                <input type='file' name='foto' onChange={handlerFoto}/> 
                            </div> */}
                            <div class='space'>
                            <Button variant="primary" type="submit" disabled={!validateForm()}>Cadastrar</Button>
                            </div>

                        </Form>
                    
                    </div>
                </div>
            </div>
        
        
    )



}