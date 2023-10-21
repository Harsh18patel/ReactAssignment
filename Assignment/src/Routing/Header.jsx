import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto d-flex justify-content-center gap-3">
              <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}>Home</NavLink>
              <NavLink to={"/About"} style={{ textDecoration: "none", color: "black" }}>About</NavLink>
              <NavLink to={"/Service"} style={{ textDecoration: "none", color: "black" }}>Service</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
