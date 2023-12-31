import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Offcanvas} from "react-bootstrap";
import './NavBar.css'

const NavBar = ({ currentPage, onPageChange}) => {

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleOffCanvasClose = () => {
    setShowOffCanvas(false)
  }

  

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="https://logoipsum.com/"><img src={'../../images/logoipsum-298.svg'} alt=""></img></Navbar.Brand>
        <Navbar.Toggle 
          aria-controls='offcanvasNavbar-expand-lg'
          onTouchEnd={() => setShowOffCanvas(!showOffCanvas)} />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-lg'
          aria-labelledby='offcanvasNavbarLabel-expand-lg'
          placement='end'
          show={showOffCanvas}
          onHide={handleOffCanvasClose}          
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg' className="sidebar-content">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link href="#Home" className={currentPage === 'Home' ? 'homeRed' : ''}  onClick={() => onPageChange('Home')} onTouchEnd={() => {onPageChange('Home'); setShowOffCanvas(!showOffCanvas)}}>Home</Nav.Link>
              <NavDropdown title="Ponte Nova" id="nav-dropdown1"  onClick={() => onPageChange('PonteNova')} >
                <NavDropdown.Item href="#Über" eventKey="2.1" className="custom-nav-dropdown" onTouchEnd={() => setShowOffCanvas(!showOffCanvas)}>
                  Über Ponte Nova
                </NavDropdown.Item>
                <NavDropdown.Item href="#Team" eventKey="2.2" onTouchEnd={() => setShowOffCanvas(!showOffCanvas)}>
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#Verwaltungsrat" eventKey="2.3" onTouchEnd={() => setShowOffCanvas(!showOffCanvas)}>
                  Verwaltungsrat
                </NavDropdown.Item>
                <NavDropdown.Item href="#Partner" eventKey="2.3" onTouchEnd={() => setShowOffCanvas(!showOffCanvas)}>
                  Partner
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dienstleistungen" id="nav-dropdown2" >
                <NavDropdown.Item href="#Trustcenter" eventKey="3.1" className="custom-nav-dropdown" onClick={() => onPageChange('Trustcenter')} onTouchEnd={() => {onPageChange('Trustcenter'); setShowOffCanvas(!showOffCanvas)}}>
                  Trustcenter
                </NavDropdown.Item>
                <NavDropdown.Item href="#Treuhand" eventKey="3.2" onClick={() => onPageChange('Treuhand')} onTouchEnd={() => {onPageChange('Treuhand'); setShowOffCanvas(!showOffCanvas)}}>
                  Treuhand
                </NavDropdown.Item>
                <NavDropdown.Item href="#Consulting" eventKey="3.3" onClick={() => onPageChange('Consulting')} onTouchEnd={() => {onPageChange('Consulting'); setShowOffCanvas(!showOffCanvas)}}>
                  Consulting
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Veranstaltungen" className={currentPage === 'Veranstaltungen' ? 'veranstaltungenRed' : ''} onClick={() => onPageChange('Veranstaltungen')} onTouchEnd={() => {onPageChange('Verantaltungen'); setShowOffCanvas(!showOffCanvas)}}>Veranstaltungen</Nav.Link>
              <Nav.Link href="#Kontakt" className={currentPage === 'Kontakt' ? 'kontaktRed' : ''} onClick={() => onPageChange('Kontakt')} onTouchEnd={() => {onPageChange('Kontakt'); setShowOffCanvas(!showOffCanvas)}}>Kontakt</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
