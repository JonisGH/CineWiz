import React from "react";

import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormText from "react-bootstrap/FormText";

import Container from "react-bootstrap/Container";

type SearchBarProps = {
  searchQuery?: string;
  hideSearchDisplay: boolean;
  handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
};

const SearchBar = (props: SearchBarProps) => {
  const { searchQuery, handleChange, hideSearchDisplay } = props;

  return (
    <>
      <Container>
        <FormGroup className="d-flex flex-column justify-content-center">
          <FormControl
            type="text"
            placeholder="Search for your favorite movies!"
            value={searchQuery}
            onChange={handleChange}
            style={{ marginTop: "4rem" }}
          />
          <FormText
            className="mx-auto"
            hidden={hideSearchDisplay}
            style={{ color: "#FFFFF" }}
          >
            Displaying results for search : {searchQuery}
          </FormText>
        </FormGroup>
      </Container>
    </>
  );
};

export default SearchBar;
