import { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";

import SideBarComponent from "./SideBarComponent";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = (): JSX.Element => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidemenuClose = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container
          style={{ transition: "margin-right .5s", paddingRight: "20px" }}
        >
          <NavbarBrand>
            <FontAwesomeIcon icon={faFilm} /> CineWiz
          </NavbarBrand>
          <Button
            variant="outline-light"
            style={{
              border: "none",
              fontWeight: "bold",
            }}
            onClick={handleSidemenuClose}
          >
            {openSidebar ? (
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
        <SideBarComponent barPlacement="end" show={openSidebar} />
      </Navbar>
    </>
  );
};

export default NavbarComponent;
