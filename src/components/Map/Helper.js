import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import useToken from "../App/useToken";
import Map from "./Map";


export default function RenderMap(props){
    const params = useParams();
    const {token, setToken} = useToken();
    const [location, setLocation] = useState();
    const [counter, setCounter] = React.useState(60);

    const getLocation = async (credentials) => {
        console.log(credentials);
        return (fetch("http://localhost:8080/location", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(credentials)
        })).then(data => data.json());
    }

    const handleLocation = async (token, plate) => {
        const location = await getLocation({access_token:token, plate});
        setLocation(location);
    }

    const renderComponent = (text, showErrorMessage=false) => {
        if (location) return text
        else if(showErrorMessage) return <p>Veículo não encontrado, volte para o dashboard e tente novamente</p>
        else return 
    }

    useEffect(() => {
        handleLocation(token, params.id);
    }, [])

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer)
    }, [counter]);

    const handleClick = () => {
        window.location.reload();
    }


    return(
        <div>
            <h2 className="pageTitle mt-2">Localização do Veículo {params.id}</h2>
            <br />
            <Container fluid>
                <Row className="justify-content-md-center pb-2">
                    <Col><Button href="/dashboard" variant="light">Voltar</Button>{' '}</Col>
                </Row>
                {renderComponent((<div><Row pt={100} className="justify-content-md-center">
                    <Col>{renderComponent(<Button variant="light" disabled={counter > 0} onClick={() => {handleClick()}}>Atualizar</Button>)}</Col>
                </Row>
                <Row>
                    <Col hidden={counter == 0}>Você pode atualizar novamente em: {counter}</Col>
                </Row></div>), false)}
            </Container>
            <br/>
            {renderComponent(<Map location={location} zoomLevel={17}/>, true)}
        </div>
    )
}