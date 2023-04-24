import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <footer className="justify-content-around"> 
            <Navbar bg="dark" variant="light">
                <Container className="justify-content-around">
                 <Nav className= "footer">
                        <Nav.Link href="https://github.com/brennaveir" target="_blank">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/brennvoyles/" target="_blank">LinkedIn</Nav.Link>
                        <Nav.Link href="https://stackoverflow.com/users/21717949/brennaveir" target="_blank">Stackoverflow</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>

    );
}

export default Footer;
