import React, { useState } from "react";
import { Container, NavbarBrand, Navbar, Button } from "react-bootstrap";

import SideBarComponent from "./SideBarComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = (): JSX.Element => {
  const [sidebarOpen, setSiderbarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setSiderbarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container
          style={{ transition: "margin-right .5s", paddingRight: "20px" }}
        >
          <NavbarBrand href="/home">
            <FontAwesomeIcon icon={faFilm} /> CineWiz
          </NavbarBrand>
          <Button
            role="button"
            variant="outline-light"
            style={{
              border: "none",
              fontWeight: "bold",
            }}
            onClick={toggleSidebarOpen}
          >
            {sidebarOpen ? (
              <>
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronLeft} />
              </>
            )}
            &nbsp;My stuff&nbsp;
          </Button>
        </Container>
        <SideBarComponent barPlacement="end" show={sidebarOpen} />
      </Navbar>
    </>
  );
};

export default NavbarComponent;
