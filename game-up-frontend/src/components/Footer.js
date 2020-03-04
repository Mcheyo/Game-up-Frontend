import React from 'react'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
const Footer =props => {
    return (
        <div className="fixed-bottom">
            <Navbar color="dark" >
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
 } 

 export default Footer 