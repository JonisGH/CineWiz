import React, { useState, useEffect } from 'react';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faEye as eyeFilled } from '@fortawesome/free-solid-svg-icons';
import { faEye as eyeOutlined } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark as minus } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import { MovieObject, useManageUserLists } from '../context/appContext';
import Container from 'react-bootstrap/Container';
import FadingTypographyComponent from './FadingTypographyComponent';
type RowProps = {
  movie: MovieObject;
};

const TableRowComponent = (props: RowProps): JSX.Element => {
  const { movie } = props;
  const [firstRender, setFirstRender] = useState(true);
  const [hideFavorite, setHideFavorite] = useState(true);
  const [hideWatchlist, setHideWatchlist] = useState(true);
  const {
    state,
    addToFavorites,
    addToWatchlist,
    removeFromFavorites,
    removeFromWatchlist,
  } = useManageUserLists();

  useEffect(() => {
    setFirstRender(false);
  }, []);

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
    listType: 'watchlist' | 'favorites',
    checkMovie: MovieObject
  ): boolean {
    if (
      listType === 'watchlist' &&
      state.watchlist.find((movie) => movie.id === checkMovie.id)
    ) {
      return true;
    }
    if (
      listType === 'favorites' &&
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
          style={{ maxHeight: '3rem', maxWidth: '3rem' }}
        >
          <img
            src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
            alt={'poster-table-cell'}
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </td>
        <td className="border-0" style={{ paddingLeft: '1rem' }}>
          <div className="mt-4 mb-4">
            <p>{movie.title}</p>
            <small style={{ color: 'GrayText' }}>
              {' (' + movie.release_date + ')'}
            </small>
          </div>
        </td>
        <td className="border-0">
          <div className="mt-4 mb-4">
            <small style={{ color: 'GrayText' }}>TMDB rating</small>
            &nbsp;
            <br />
            {movie.vote_average}&nbsp;
            <FontAwesomeIcon color="gold" icon={starFilled} />
          </div>
        </td>
        <td className="border-0">
          <Container className="mt-4 mb-4">
            {buttonStateCheck('favorites', movie) ? (
              <Button
                variant="outline-light"
                size="sm"
                className=" mt-4 mb-4 border-0"
                onClick={handleRemoveFavorite}
                style={{
                  maxWidth: '37px',
                  maxHeight: '29.25px',
                  whiteSpace: 'nowrap',
                }}
              >
                <>
                  <FontAwesomeIcon size="xl" icon={heartFilled} />
                  <FontAwesomeIcon
                    icon={minus}
                    className="text-dark bg-light"
                    style={{
                      borderRadius: '20px',
                      marginLeft: '-9px',
                    }}
                  />
                </>
                <FadingTypographyComponent
                  textValue="added to favorites"
                  hide={hideFavorite}
                />
              </Button>
            ) : (
              // w 37 h 29.25 PX
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleAddFavorite}
                style={{
                  maxWidth: '37px',
                  maxHeight: '29.25px',
                  whiteSpace: 'nowrap',
                }}
              >
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
                <FadingTypographyComponent
                  textValue="added to favorites"
                  hide={hideFavorite}
                />
              </Button>
            )}
          </Container>
        </td>
        <td className="border-0" style={{ paddingRight: '1rem' }}>
          <Container className="mt-4 mb-4">
            {buttonStateCheck('watchlist', movie) ? (
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleRemoveWatchlist}
                style={{
                  maxWidth: '37px',
                  maxHeight: '29.25px',
                  whiteSpace: 'nowrap',
                }}
              >
                <>
                  <FontAwesomeIcon size="xl" icon={eyeFilled} />
                  <FontAwesomeIcon
                    icon={minus}
                    className="text-dark bg-light"
                    style={{
                      borderRadius: '20px',
                      marginLeft: '-9px',
                    }}
                  />
                </>
                <FadingTypographyComponent
                  textValue="added to watchlist"
                  hide={hideWatchlist}
                />
              </Button>
            ) : (
              <Button
                variant="outline-light"
                size="sm"
                className="mt-4 mb-4 border-0"
                onClick={handleAddWatchlist}
                style={{
                  maxWidth: '37px',
                  maxHeight: '29.25px',
                  whiteSpace: 'nowrap',
                }}
              >
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
                <FadingTypographyComponent
                  textValue="added to watchlist"
                  hide={hideWatchlist}
                />
              </Button>
            )}
          </Container>
        </td>
      </tr>
    </>
  );
};

export default TableRowComponent;
