import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Offcanvas } from 'react-bootstrap';
const expand="lg";
const Header = () =>(
  <Row>
    <Col md={12}>
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
    <Container fluid>
      <Navbar.Brand href="#"><h5>NY Times Most Popular Articles</h5></Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
           </Nav>
          <Form className="d-flex">
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
    </Navbar> 
    </Col>            
  </Row>
);

export default Header;