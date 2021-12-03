import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Hero Collectibles</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Nuevos</Nav.Link>
                  <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Figuras de Acción</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Lego´s</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Estatuas
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">
                    Contacto
                  </Nav.Link>
                  <CartWidget/>
                </Nav>
                
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="ej: Batman"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>            

        </div>
    )
}

