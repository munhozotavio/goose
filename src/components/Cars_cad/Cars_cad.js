import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';

// import './Cars.cad.css';

export default function Cars_cad(){
    const [modelo,setModelo] = useState("");
    const [placa,setPlaca] = useState("");
    const [cor,setCor] = useState("");
    const [ano,setAno] = useState("");
    const [foto,setFoto] = useState("");
    const [flag,setFlag] = useState(false)

    const handleSubmit = async (evente) =>{
        alert("Veiculo Cadastrado")
    }

    const validateForm = () => {
        return modelo.length > 0 && placa.length > 0 && cor.length > 0 && ano.length > 0
    }

    const handlerFoto = (event) =>{
        setFoto(event.target.files[0])
        setFlag(true)
    }

    return (
        <div> 
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formModelo">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control autoFocus type='modelo' placeholder='Modelo' value={modelo} onChange={(e)=>setModelo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPlaca">
                    <Form.Label>Placa</Form.Label>
                    <Form.Control autoFocus type='placa' placeholder='Placa' value={placa} onChange={(e)=>setPlaca(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formCor">
                    <Form.Label>Cor</Form.Label>
                    <Form.Control autoFocus type='cor' placeholder='Cor' value={cor} onChange={(e)=>setCor(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formAno">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control autoFocus type='ano' placeholder='ano' value={ano} onChange={(e)=>setAno(e.target.value)} />
                </Form.Group>
                <div>
                    <input type='file' name='foto' onChange={handlerFoto}/> 
                </div>
                <Button variant="primary" type="submit" disabled={!validateForm()}>Acessar</Button>

            </Form>
        </div>
    )



}