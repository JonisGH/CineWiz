import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';

import Container from 'react-bootstrap/Container';

type SearchBarProps = {
  searchInput?: string;
  handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = (props: SearchBarProps) => {
  const { searchInput, handleChange, show, setShow } = props;

  function handleOnFocus() {
    setShow(false);
  }

  useEffect(() => {
    if (searchInput !== '') {
      setTimeout(() => {
        setShow(true);
      }, 800);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <>
      <Container>
        <FormGroup className="d-flex flex-column justify-content-center">
          <FormControl
            onFocus={handleOnFocus}
            type="text"
            placeholder="Search for your favorite movies!"
            value={searchInput}
            onChange={handleChange}
            style={{ marginTop: '4rem' }}
          />
          <FormText className="mx-auto mt-3 text-light" hidden={!show}>
            Displaying results for search : {searchInput}
          </FormText>
        </FormGroup>
      </Container>
    </>
  );
};

export default SearchBar;
