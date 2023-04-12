import React, { useState } from "react";
// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import {
  faStar as starFilled,
  faHeart as heartFilled,
  faEye as eyeFilled,
  faCircleXmark as minus,
} from "@fortawesome/free-solid-svg-icons/index";
import {
  faHeart as heartOutlined,
  faEye as eyeOutlined,
} from "@fortawesome/free-regular-svg-icons/index";

import { Button, Container } from "react-bootstrap";

// Not sure if i should use this for feedback or keep it out
// import FadingTypographyComponent from "./FadingTypographyComponent";

import { MovieObject, useManageUserLists } from "../context/appContext";
import { useNavigate } from "react-router";

type RowProps = {
  movie: MovieObject;
};

const TableRowComponent = (props: RowProps): JSX.Element => {
  const { movie } = props;
  const [hideFavorite, setHideFavorite] = useState(true);
  const [hideWatchlist, setHideWatchlist] = useState(true);
  const {
    state,
    addToFavorites,
    addToWatchlist,
    removeFromFavorites,
    removeFromWatchlist,
  } = useManageUserLists();

  const navigate = useNavigate();

  function handleAddFavorite() {
    setHideFavorite(!hideFavorite);
    addToFavorites(movie);
  }
  function handleRemoveFavorite() {
    setHideFavorite(!hideFavorite);
    removeFromFavorites(movie);
  }
  function handleAddWatchlist() {
    setHideWatchlist(!hideWatchlist);
    addToWatchlist(movie);
  }
  function handleRemoveWatchlist() {
    setHideWatchlist(!hideWatchlist);
    removeFromWatchlist(movie);
  }

  function buttonStateCheck(
    listType: "watchlist" | "favorites",
    checkMovie: MovieObject
  ): boolean {
    if (
      listType === "watchlist" &&
      state.watchlist.find((movie) => movie.id === checkMovie.id)
    ) {
      return true;
    }
    if (
      listType === "favorites" &&
      state.favorites.find((movie) => movie.id === checkMovie.id)
    ) {
      return true;
    }

    return false;
  }

  return (
    <>
      <tr>
        <td
          onClick={() => navigate("details", { state: movie })}
          className="d-none d-lg-table-cell border-0"
          style={{ maxHeight: "3rem", maxWidth: "3rem" }}
        >
          <img
            src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            alt={"poster-table-cell"}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </td>
        <td
          onClick={() => navigate("details", { state: movie })}
          className="border-0"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="mt-4 mb-4">
            <p>{movie.title}</p>
            <small style={{ color: "GrayText" }}>
              {" (" + movie.release_date + ")"}
            </small>
          </div>
        </td>

        <td
          onClick={() => navigate("details", { state: movie })}
          className="border-0"
        >
          <div className="mt-4 mb-4">
            <small style={{ color: "GrayText" }}>TMDB rating</small>
            &nbsp;
            <br />
            {movie.vote_average}&nbsp;
            <FontAwesomeIcon color="gold" icon={starFilled} />
          </div>
        </td>
        <td className="border-0">
          <Container className="mt-4 mb-4">
            {buttonStateCheck("favorites", movie) ? (
              <Button
                variant="outline-light"
                size="sm"
                className=" mt-4 mb-4 border-0"
                onClick={handleRemoveFavorite}
                style={{
                  maxWidth: "37px",
                  maxHeight: "29.25px",
                  whiteSpace: "nowrap",
                }}
              >
                <>
                  <FontAwesomeIcon size="xl" icon={heartFilled} />
                  <FontAwesomeIcon
                    icon={minus}
                    className="text-dark bg-light"
                    style={{
                      borderRadius: "20px",
                      marginLeft: "-9px",
                    }}
                  />
                </>
                {/* <FadingTypographyComponent
                  textValue="added to favorites"
                  hide={hideFavorite}
                /> */}
              </Button>
            ) : (
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleAddFavorite}
                style={{
                  maxWidth: "37px",
                  maxHeight: "29.25px",
                  whiteSpace: "nowrap",
                }}
              >
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
                {/* <FadingTypographyComponent
                  textValue="added to favorites"
                  hide={hideFavorite}
                /> */}
              </Button>
            )}
          </Container>
        </td>
        <td className="border-0" style={{ paddingRight: "1rem" }}>
          <Container className="mt-4 mb-4">
            {buttonStateCheck("watchlist", movie) ? (
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleRemoveWatchlist}
                style={{
                  maxWidth: "37px",
                  maxHeight: "29.25px",
                  whiteSpace: "nowrap",
                }}
              >
                <>
                  <FontAwesomeIcon size="xl" icon={eyeFilled} />
                  <FontAwesomeIcon
                    icon={minus}
                    className="text-dark bg-light"
                    style={{
                      borderRadius: "20px",
                      marginLeft: "-9px",
                    }}
                  />
                </>
                {/* <FadingTypographyComponent
                  textValue="added to watchlist"
                  hide={hideWatchlist}
                /> */}
              </Button>
            ) : (
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleAddWatchlist}
                style={{
                  maxWidth: "37px",
                  maxHeight: "29.25px",
                  whiteSpace: "nowrap",
                }}
              >
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
                {/* <FadingTypographyComponent
                  textValue="added to watchlist"
                  hide={hideWatchlist}
                /> */}
              </Button>
            )}
          </Container>
        </td>
      </tr>
    </>
  );
};

export default TableRowComponent;
