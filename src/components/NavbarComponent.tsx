import React from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = (): JSX.Element => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="#home">
            <FontAwesomeIcon icon={faFilm} /> CineWiz
          </NavbarBrand>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#user">
              My profile&nbsp;&nbsp;
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavDropdown menuVariant="dark" title="My profile">
              <NavLink href="#movies2watch">Saved Movies</NavLink>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
