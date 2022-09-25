import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container className='container'>
            <Navbar.Brand as={Link} to='/'><span className='brand'>Fred Bian</span></Navbar.Brand>
            <Nav className="">
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation