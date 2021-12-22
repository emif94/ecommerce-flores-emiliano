import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
              <Link to='/'>Hero Collectibles</Link>
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
                    <NavDropdown.Item><Link to="categoria/figuras">Figuras de Acción</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="categoria/lego">Lego</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="categoria/estatuas">Estatuas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >
                    <Link to="contacto">Contacto</Link>
                  </Nav.Link>
                  <Nav.Link >
                    <Link to= '/cart'><CartWidget/></Link>
                  </Nav.Link>
                  
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

export default NavBar
