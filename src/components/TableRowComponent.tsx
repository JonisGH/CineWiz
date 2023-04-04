import { useState } from 'react';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutlined } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faEye as eyeFilled } from '@fortawesome/free-solid-svg-icons';
import { faEye as eyeOutlined } from '@fortawesome/free-regular-svg-icons';

// Toast
import { Toast, ToastContainer } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { MovieObject, useManageUserLists } from '../context/appContext';

type RowProps = {
  movie: MovieObject;
};

const TableRowComponent = (props: RowProps) => {
  const { movie } = props;
  const [show, setShow] = useState(false);
  const {
    state,
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
  } = useManageUserLists();

  return (
    <>
      <div
        className="d-flex d-lg-none"
        style={{
          marginTop: '2rem',
          height: '16rem',
          width: '100%',
        }}
      >
        <img
          src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
          alt={'poster-above'}
        />
      </div>

      <tr key={movie.id}>
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
        <td className="border-0">
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
              onClick={}
            >
              {show ? (
                <FontAwesomeIcon size="xl" icon={heartFilled} />
              ) : (
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
              )}
            </Button>
            <ToastContainer containerPosition="relative">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={1500}
                autohide
                style={{
                  background: 'transparent',
                  color: 'white',
                  fontStyle: 'italic',
                  boxShadow: 'none',
                }}
              >
                added to favorites
              </Toast>
            </ToastContainer>
          </div>
        </td>
        <td className="border-0">
          <div className="mt-4 mb-4">
            <Button
              key={'watchBtn' + movie.id}
              variant="outline-light"
              size="sm"
              className="w-100 mt-4 mb-4 border-0"
              onClick={(movie) => addToWatchlist}
            >
              {movie.watchlist ? (
                <FontAwesomeIcon size="xl" icon={eyeFilled} />
              ) : (
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
              )}
            </Button>
            <ToastContainer containerPosition="relative">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={1500}
                autohide
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontStyle: 'italic',
                  boxShadow: 'none',
                }}
              >
                added to watchlist
              </Toast>
            </ToastContainer>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRowComponent;
