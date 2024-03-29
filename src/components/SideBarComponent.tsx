import React from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faEye as eyeFilled } from '@fortawesome/free-solid-svg-icons';
import { faEye as eyeOutlined } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark as minus } from '@fortawesome/free-solid-svg-icons';

import { MovieObject, useManageUserLists } from '../context/appContext';

type SideBarProps = {
  show?: boolean;
  barPlacement?: 'start' | 'end' | 'top' | 'bottom';
};

export default function SideBarComponent(props: SideBarProps) {
  const { show, barPlacement } = props;

  const { state, removeFromFavorites, removeFromWatchlist } =
    useManageUserLists();

  const favorites = state.favorites;
  const watchlist = state.watchlist;

  function handleRemoveFavorite(movie: MovieObject) {
    removeFromFavorites(movie);
  }
  function handleRemoveWatchlist(movie: MovieObject) {
    removeFromWatchlist(movie);
  }

  // TODO: Make custom component that pushes table instead
  return (
    <>
      <Offcanvas
        className={'sidebar'}
        scroll={true}
        backdrop={false}
        placement={barPlacement}
        show={show}
        style={{
          backgroundColor: '#212529',
          top: '3rem',
        }}
      >
        <Table striped hover variant="dark">
          <thead style={{ borderColor: '#212529' }}>
            <tr>
              <th className="d-flex gap-3">
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
                <small>Favorites</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((movie) => {
              return (
                <tr
                  key={movie.id + '_favorites'}
                  style={{ verticalAlign: 'middle', lineBreak: 'strict' }}
                >
                  <td>
                    <div>
                      {movie.vote_average}&nbsp;&nbsp;
                      <FontAwesomeIcon color="gold" icon={starFilled} />
                    </div>
                  </td>
                  <td>{movie.title}</td>
                  <td>
                    <Button
                      variant="outline-light"
                      size="sm"
                      className="w-100"
                      onClick={() => handleRemoveFavorite(movie)}
                      style={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        border: 'none',
                      }}
                    >
                      <FontAwesomeIcon size="xl" icon={heartFilled} />
                      <FontAwesomeIcon
                        icon={minus}
                        className="text-dark bg-light"
                        style={{
                          borderRadius: '20px',
                          marginLeft: '-9px',
                        }}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table striped hover variant="dark">
          <thead>
            <tr>
              <th className="d-flex gap-3" style={{ border: 'none' }}>
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
                <small>Watchlist</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((movie) => {
              return (
                <tr
                  key={movie.id + '_watchlist'}
                  style={{ verticalAlign: 'middle', lineBreak: 'strict' }}
                >
                  <td>
                    {movie.vote_average}&nbsp;&nbsp;
                    <FontAwesomeIcon color="gold" icon={starFilled} />
                  </td>
                  <td>
                    <p style={{ lineBreak: 'strict' }}>{movie.title}</p>
                  </td>

                  <td>
                    <Button
                      variant="outline-light"
                      size="sm"
                      className="w-100"
                      onClick={() => handleRemoveWatchlist(movie)}
                      style={{
                        border: 'none',
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <FontAwesomeIcon size="xl" icon={eyeFilled} />
                      <FontAwesomeIcon
                        icon={minus}
                        className="text-dark bg-light"
                        style={{
                          borderRadius: '20px',
                          marginLeft: '-9px',
                        }}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Offcanvas>
    </>
  );
}
