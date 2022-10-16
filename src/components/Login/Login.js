import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';

import './Login.css';

async function loginUser(credentials) {
    return(fetch("http://localhost:8080/login", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(credentials)
    })).then(data => data.json());
    
}


export default function Login({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await loginUser({email,password});
        if (Object.keys(token).length === 0){
            alert("Usuário ou senha incorretos");
        } 
        else {
            setToken(token);
            window.location.reload();
        };
    }

    return (
        <div className="loginWrapper">
            <h1>Faça login para acessar</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" placeholder="mail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!validateForm()}>Acessar</Button>
            </Form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
