import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../styles/styles.css'
import 'animate.css';


const NavBar = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg" className='fondo P0'>
            <Container fluid className='P0'>
              <Link to='/' className='textoLogo' id="RouterNavLink">
                <img src='../logo.png' className='logoNavBar animate__animated animate__fadeInTopLeft' />
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
                  <Link to="contacto" className='textoNav textoContacto'>                    
                    CONTACTO
                  </Link>
                  
                  
                </Nav>

                <Link  to= '/cart' className='textoBlanco'>
                    <CartWidget/>
                </Link>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>            

        </div>
    )
}

export default NavBar
