import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,NavDropdown,Form, FormControl, Button} from 'react-bootstrap';

function Header() {

    return (
        // <header className='Menu'>
        //     <div>
        //         <h3>Hello</h3>
        //     </div>
        // </header>
        <Navbar className='Menu' expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    <Form className="d-lg-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
