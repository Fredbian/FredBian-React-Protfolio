import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Fred Bian</Navbar.Brand>
          <Nav className="me-auto">

            <NavLink to="/about">
              About 22
            </NavLink>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink to="/resume">
              Resume
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation