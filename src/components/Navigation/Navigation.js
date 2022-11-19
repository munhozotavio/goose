import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import { Icon } from '@iconify/react';
import './Navigation.css';



export default function Navigation() {
    const logout = () => {
        localStorage.removeItem('access_token');
        window.location.reload();
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Row>
                    <div className='ps-2'>
                        <Nav>
                            <NavDropdown title={<Icon icon="ant-design:menu-outlined" width="30" />} id="basic-nav-dropdown" variant="secondary">
                                <NavDropdown.Item href="/dashboard">Localização</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cars">Veículos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Row>
                <Row>
                    <Navbar.Brand>UniRadar</Navbar.Brand>
                </Row>
                <Row>
                    <div className='pe-3'>
                        <Navbar.Text>
                            <Form>
                                <Button variant="link" onClickCapture={() => logout()}>Encerrar sessão</Button>
                            </Form>
                        </Navbar.Text>
                    </div>
                </Row>
            </Container>
        </Navbar>
    )
}