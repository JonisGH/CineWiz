import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";

import Table from "react-bootstrap/Table";

import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardGroup from "react-bootstrap/CardGroup";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/Button";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faBorderedEye } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faBorderStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faBorderHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container, ToastBody } from "react-bootstrap";
import SearchBar from "./SearchBarComponent";
type Props = {};

const TableComponent = (props: Props) => {
  const [show, setShow] = useState(false);
  const [searchResultState, setSearchResultState] = useState({});

  const handleShow = () => {
    setShow(true);
  };

  const testMovie = {
    0: {
      adult: false,
      backdrop_path: "/7ABgKch4hBX4qwCujRKM58fKsoG.jpg",
      genre_ids: [12, 14, 28],
      id: 121,
      original_language: "en",
      original_title: "The Lord of the Rings: The Two Towers",
      overview:
        "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
      popularity: 82.443,
      poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
      release_date: "2002-12-18",
      title: "The Lord of the Rings: The Two Towers",
      video: false,
      vote_average: 8.4,
      vote_count: 19510,
    },

    1: {
      adult: false,
      backdrop_path: "/ysKahAEPP8h6MInuLjr0xuZOTjh.jpg",
      genre_ids: [80, 35],
      id: 107,
      original_language: "en",
      original_title: "Snatch",
      overview:
        "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
      popularity: 28.843,
      poster_path: "/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
      release_date: "2000-09-01",
      title: "Snatch",
      video: false,
      vote_average: 7.8,
      vote_count: 7924,
    },
  };

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
    event.preventDefault();

    if (event.target.value !== undefined) {
      setSearchQuery(event?.target?.value);
    }
  }

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        hideSearchDisplay={hideSearchDisplay}
        handleChange={handleChange}
      />
      <Container>
        <Table striped hover variant="dark" style={{ marginTop: "2rem" }}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>TMDB Rating</th>
              <th>Your rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-align-center">
            <tr>
              <td style={{ maxHeight: "3rem", maxWidth: "3rem" }}>
                <img
                  alt="poster"
                  src={
                    "https://image.tmdb.org/t/p/w200" + testMovie[0].poster_path
                  }
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </td>
              <td>
                <div style={{ padding: "4px 8px", marginTop: "1.9rem" }}>
                  <p>
                    {testMovie[0].title}
                    <small style={{ color: "GrayText" }}>
                      {" (" + testMovie[0].release_date + ")"}
                    </small>
                  </p>
                </div>
              </td>
              <td>
                <div style={{ padding: "4px 8px", marginTop: "1.9rem" }}>
                  {testMovie[0].vote_average}&nbsp;
                  <FontAwesomeIcon color="gold" icon={faStar} />
                </div>
              </td>
              <td>
                <Button
                  variant="outline-light"
                  style={{
                    padding: "4px 8px",
                    border: "none",
                    marginTop: "1.9rem",
                  }}
                >
                  Rate &nbsp;
                  <FontAwesomeIcon color="gold" icon={faBorderStar} />
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="w-100"
                  onClick={handleShow}
                  style={{
                    marginTop: "1.9rem",
                    borderRadius: "360px",
                    border: "none",
                  }}
                >
                  {show ? (
                    <FontAwesomeIcon size="xl" icon={faHeart} />
                  ) : (
                    <FontAwesomeIcon size="xl" icon={faBorderHeart} />
                  )}
                </Button>
                <ToastContainer containerPosition="relative">
                  <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={1500}
                    autohide
                    style={{
                      background: "transparent",
                      color: "white",
                      fontStyle: "italic",
                      boxShadow: "none",
                    }}
                  >
                    added to favorites
                  </Toast>
                </ToastContainer>
              </td>
              <td>
                <div>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="w-100"
                    onClick={handleShow}
                    style={{
                      marginTop: "1.9rem",
                      borderRadius: "360px",
                      border: "none",
                    }}
                  >
                    {show ? (
                      <FontAwesomeIcon size="xl" icon={faEye} />
                    ) : (
                      <FontAwesomeIcon size="xl" icon={faBorderedEye} />
                    )}
                  </Button>
                  <ToastContainer containerPosition="relative">
                    <Toast
                      onClose={() => setShow(false)}
                      show={show}
                      delay={1500}
                      autohide
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                        fontStyle: "italic",
                        boxShadow: "none",
                      }}
                    >
                      added to watchlist
                    </Toast>
                  </ToastContainer>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableComponent;
