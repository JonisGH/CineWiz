export interface MovieObject {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  id: number;
  overview: string;
  favorite?: boolean;
  watchlist?: boolean;
}

export interface UserListStates {
  favorites: MovieObject[];
  watchlist: MovieObject[];

  saveToFavorites: (favorites: MovieObject) => void;
  // removeFromFavoirtes: (favorites: MovieObject) => void;

  // saveToWatchlist: (watchlist: MovieObject) => void;
  // removeFromWatchlist: (watchlist: MovieObject) => void;
}
