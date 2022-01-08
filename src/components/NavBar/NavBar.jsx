import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../styles/styles.css'


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{ padding:'0px', }} className='fondo'>
            <Container fluid style={{ padding:'0px', }} className='gradienteNavBar'>
              <Link to='/' className='textoLogo'>
                <img src='../logo.png' style={{ maxHeight: '60px', marginTop:'10px',marginLeft:'10px', backgroundColor: 'transparent', filter: 'invert(100%)'}}/>
                <div style={{ padding:'0px',margin:'0px',marginLeft:'10px', }} className='textoLogo'>HERO COLLECTIBLES</div>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll"  />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px',  padding:'0px',}}
                  navbarScroll
                >
                  
                  <NavDropdown title="Categorías" id="navbarScrollingDropdown" className='textoNavBar'>
                    <NavDropdown.Item><Link to="categoria/figuras">Figuras de Acción</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="categoria/lego">Lego</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="categoria/estatuas">Estatuas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >
                    <Link to="contacto">Contacto</Link>
                  </Nav.Link>
                  
                  
                </Nav>

                <Nav.Link >
                    <Link to= '/cart'><CartWidget/></Link>
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
