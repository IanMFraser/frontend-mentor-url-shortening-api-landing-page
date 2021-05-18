import React from 'react'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Navigation = () => {
    return(
        <NavBar className="navigation">
            <NavBar.Brand href="#">IFURL</NavBar.Brand>
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">Resources</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav as="ul" >
                        <Nav.Item as="li">
                            <Nav.Link href="#">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Button>Sign Up</Button>
                        </Nav.Item>
                    </Nav>
                </Nav.Item>
            </Nav>
        </NavBar>
    )
}

export default Navigation