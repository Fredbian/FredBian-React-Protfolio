import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link, NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Fred Bian</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/about'>About Me</Nav.Link>
            <Nav.Link as={NavLink} to='/protfolio'>Protfolio</Nav.Link>
            <Nav.Link as={NavLink} to='/resume'>Resume</Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>            
    </>
  )
}

export default Navigation