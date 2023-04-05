import { useState } from "react";

// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutlined } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutlined } from "@fortawesome/free-regular-svg-icons";
import { faEye as eyeFilled } from "@fortawesome/free-solid-svg-icons";
import { faEye as eyeOutlined } from "@fortawesome/free-regular-svg-icons";

// Toast
import ButtonToastComponent from "./ButtonToastComponent";

import Button from "react-bootstrap/Button";
import { MovieObject, useManageUserLists } from "../context/appContext";

type RowProps = {
  movie: MovieObject;
};

const TableRowComponent = (props: RowProps): JSX.Element => {
  const { movie } = props;
  const [showFavorite, setShowFavorite] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const { state, addToFavorites, addToWatchlist } = useManageUserLists();

  function handleAddFavorite() {
    addToFavorites(movie);
    setShowFavorite(true);
  }
  function handleAddWatchlist() {
    addToWatchlist(movie);
    setShowWatchlist(true);
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
          className="d-none d-lg-table-cell border-0"
          style={{ maxHeight: "3rem", maxWidth: "3rem" }}
        >
          <img
            src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            alt={"poster-table-cell"}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </td>
        <td className="border-0" style={{ paddingLeft: "1rem" }}>
          <div className="mt-4 mb-4">
            <p>{movie.title}</p>
            <small style={{ color: "GrayText" }}>
              {" (" + movie.release_date + ")"}
            </small>
          </div>
        </td>
        <td className="border-0">
          <div className="mt-4 mb-4">
            <small style={{ color: "GrayText" }}>TMDB rating</small>
            &nbsp;
            <br />
            {movie.vote_average}&nbsp;
            <FontAwesomeIcon color="gold" icon={starFilled} />
          </div>
        </td>
        {/* <td }>
        <Button
          variant="outline-light"
          style={{
            padding: "4px 8px",
            border: "none",
            marginTop: "1.9rem",
          }}
        >
          Rate &nbsp;
          <FontAwesomeIcon color="gold" icon={starOutlined} />
        </Button>
      </td> */}
        <td className="border-0">
          <div className="mt-4 mb-4">
            <Button
              variant="outline-light"
              size="sm"
              className="w-100 mt-4 mb-4 border-0"
              onClick={handleAddFavorite}
            >
              {buttonStateCheck("favorites", movie) ? (
                <FontAwesomeIcon size="xl" icon={heartFilled} />
              ) : (
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
              )}
            </Button>
            <ButtonToastComponent
              show={showFavorite}
              setShow={setShowFavorite}
              toastMessage="added to favorites"
            />
          </div>
        </td>
        <td className="border-0" style={{ paddingRight: "1rem" }}>
          <div className="mt-4 mb-4">
            <Button
              variant="outline-light"
              size="sm"
              className="w-100 mt-4 mb-4 border-0"
              onClick={handleAddWatchlist}
            >
              {buttonStateCheck("watchlist", movie) ? (
                <FontAwesomeIcon size="xl" icon={eyeFilled} />
              ) : (
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
              )}
            </Button>
            <ButtonToastComponent
              show={showWatchlist}
              setShow={setShowWatchlist}
              toastMessage="added to watchlist"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRowComponent;
