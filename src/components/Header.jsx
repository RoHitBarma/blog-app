import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import logo from '../assets/blogLogo.png' 


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary py-1">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center"> 
                        <img 
                            src={logo} 
                            alt="Logo" 
                            width="60" 
                            height="60" 
                            className='d-inline-block align-top'
                            style={{ objectFit: 'contain' }}
                        />
                        <span className='fw-bold fs-4'>Blog App</span>
                    </Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" className='fw-bold'>Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" className='fw-bold'>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className='fw-bold'>Contact</Nav.Link>
                                <Nav.Link as={Link} to="/create-blog" className='fw-bold'>Post Blog</Nav.Link>
                            </Nav>

                            {/* Theme Switch Button */}
                            <ThemeSwitcher />
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
