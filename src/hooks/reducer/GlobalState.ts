import React from "react";

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

export interface MovieList {
  movieList: [object: MovieObject];
}

export interface UserListStates {
  favorites: object[];
  watchlist: object[];
}

export const initialUserListState: UserListStates = {
  favorites: [],
  watchlist: [],
};

export const UserListContext = React.createContext<{
  userListState: UserListStates;
  dispatch: React.Dispatch<MovieObject>;
}>({
  userListState: initialUserListState,
  dispatch: () => undefined,
});

export interface SearchqueryListState {
  searchResults: object[];
}

export const initialSearchqueryListState: SearchqueryListState = {
  searchResults: [{}],
};
