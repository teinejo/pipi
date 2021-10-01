import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Header() {

    return (
        <Navbar className='Menu' expand="lg">
            <Container className='Header'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='Homepage' href="/home">WarcraftGames</div>
                    <Nav className="me-auto">
                        <a className='headerLink' href="/">Home</a>  {/* Ссылка на главную страницу */}
                        <a className='headerLink' href="">News</a>
                    <Form className="d-lg-flex margin_form">
                        {/* Форма с поиском */}
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>    {/* Кнопка с поиском */}
                    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

