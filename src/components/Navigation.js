import { Col, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Row className='w-100' >
          <Col className='col-5'>
            <Navbar.Brand as={Link} to='/'><span className='brand'>Fred Bian</span></Navbar.Brand>
          </Col>
          <Col className='col-7'>
            <Nav className="justify-content-end">
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
          </Col>
        </Row>
      </Navbar>
    </>
  )
}

export default Navigation