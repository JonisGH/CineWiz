import React from "react";

import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <>
      <Form>
        <Container>
          <FormGroup className="d-flex flex-column justify-content-center">
            <FormControl
              type="text"
              placeholder="Search for your favorite movies!"
              style={{ marginTop: "4rem" }}
            />
            <Button
              size="lg"
              variant="secondary"
              type="submit"
              style={{ margin: "auto", marginTop: "1rem" }}
            >
              Search&nbsp;&nbsp;
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </FormGroup>
        </Container>
      </Form>
    </>
  );
};

export default SearchBar;
