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
                        <Nav.Link href="https://github.com/brennaveir">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/feed/">LinkedIn</Nav.Link>
                        <Nav.Link href="#pricing">??????</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>

    );
}

export default Footer;
