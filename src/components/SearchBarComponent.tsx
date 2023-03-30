import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import useDebounce from "../hooks/useDebounce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FormText } from "react-bootstrap";

type Props = {};

const SearchBar = (props: Props) => {
  const [initialList, setInitialList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [hideSearchDisplay, setHideSearchDisplay] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);

  const TMDB_KEY = "47da03161ab5477b6ac6c70f5435f4ae";

  // welcome list
  useEffect(() => {
    const initData = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
          )
          .then((res) => {
            setInitialList(res.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    };
    initData();
  }, []);

  //search
  useEffect(() => {
    if (debouncedValue !== "") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${debouncedValue}&page=1&include_adult=false`
          )
          .then((res) => {
            setSearchResult(res.data.results);
            setHideSearchDisplay(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [debouncedValue]);

  console.log(searchResult);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    if (event.target.value !== undefined) {
      setSearchQuery(event?.target?.value);
    }
  }

  return (
    <>
      <Form>
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
      </Form>
    </>
  );
};

export default SearchBar;
