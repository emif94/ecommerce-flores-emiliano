import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../styles/styles.css'
import 'animate.css';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='fondo P0'>
            <Container fluid className='P0'>
              <Link to='/' className='textoLogo'>
                <img src='../logo.png' className='logoNavBar animate__animated animate__bounce' />
                <div className='textoLogo P0 M0'>HERO COLLECTIBLES</div>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll"  />
              <Navbar.Collapse id="navbarScroll" className='justify-content-center'>
                <Nav
                  className=" my-2 my-lg-0 justify-content-center textoNav altoNav"
                  navbarScroll
                >
                  
                  <NavDropdown title="CATEGORÍAS" id="navbarScrollingDropdown" className='textoNav'>
                    <NavDropdown.Item className='fondo P0'><Link to="categoria/figuras" className='textoNav'>Figuras de Acción</Link></NavDropdown.Item>
                    <NavDropdown.Item className='fondo'><Link to="categoria/lego" className='textoNav'>Lego</Link></NavDropdown.Item>
                    <NavDropdown.Item className='fondo'><Link to="categoria/estatuas" className='textoNav'>Estatuas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >
                    <Link to="contacto" className='textoNav'>CONTACTO</Link>
                  </Nav.Link>
                  
                  
                </Nav>

                <Nav.Link >
                    <Link to= '/cart' className='textoBlanco'><CartWidget/></Link>
                  </Nav.Link>
                
              {/*  <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="ej: Batman"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
    </Form>*/}
              </Navbar.Collapse>
            </Container>
          </Navbar>            

        </div>
    )
}

export default NavBar
