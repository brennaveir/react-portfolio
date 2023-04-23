import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'


function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <Image
            roundedCircle="true"
              alt=""
              src="./profile-pic1.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          
          </Navbar.Brand>
           
        </Container>
        <h1 className="text-light">Brenn Voyles</h1> 
      </Navbar>

    <Nav className="justify-content-end" activeKey="/home" bg="">
      <Nav.Item >
        <Nav.Link
          href="/home"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
    // <ul className="nav nav-tabs">
    //   <h1>Brenn Voyles</h1>
    //   <li className="nav-item">
    //     <a
    //       href="#aboutMe"
    //       onClick={() => handlePageChange('AboutMe')}
    //       className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#projects"
    //       onClick={() => handlePageChange('Projects')}
    //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Projects
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#resume"
    //       onClick={() => handlePageChange('Resume')}
    //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavBar;
