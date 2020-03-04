import React from 'react'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { FaLinkedin, FaGithub } from "react-icons/fa"


const Footer =props => {
    return (
        <div className="bottom">
            
                <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand target="_blank" href="https://www.linkedin.com/in/anna-dybas-5221519/">Anna Dybas < FaLinkedin /> </Navbar.Brand>
                    <Navbar.Brand className="mx-auto order-0" target="_blank" href="https://github.com/Mcheyo/Game-up-Frontend">Github Repo <FaGithub /> </Navbar.Brand>
                    <Navbar.Brand target="_blank" href="https://www.linkedin.com/in/mansour-cheyo/">Mansour Cheyo < FaLinkedin /> </Navbar.Brand>   
                </Navbar>
            
        </div>
    )
 } 

 export default Footer 