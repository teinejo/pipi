import React from "react";
import './Footer.css'
import {Container} from "react-bootstrap";

function Footer() {
    return(
        <Container fluid className='Footer'>
            <Container className='FooterText'>
                <div className='footerLinks'>
                    <a className='footerLink' href="">SUPPORT</a>
                    <a className='footerLink'> | </a>
                    <a className='footerLink' href="">CONTACT US</a>
                    <a className='footerLink'> | </a>
                    <a className='footerLink' href="">ABOUT</a>
                </div>
                <p>Created by A.V.A.</p>
            </Container>
        </Container>
    )
}

export default Footer;