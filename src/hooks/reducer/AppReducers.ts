import React from "react";
import {
  MovieObject,
  UserListStates,
  SearchqueryListState,
  initialSearchqueryListState,
} from "./GlobalState";

// Constants and reducer for adding to Watchlist & Favorites.
export type USERLIST_ACTION_CONSTANTS =
  | "ADD_TO_WATCHLIST"
  | "ADD_TO_FAVORITES"
  | "REMOVE_FROM_WATCHLIST"
  | "REMOVE_FROM_FAVORITES";

export interface UserListActions {
  type: USERLIST_ACTION_CONSTANTS;
  payload: MovieObject;
}

export const userListReducer: React.Reducer<UserListStates, UserListActions> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [payload, ...state.watchlist],
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [payload, ...state.favorites],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie !== payload),
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie !== payload),
      };
    default:
      return state;
  }
};

// Searchquery reducer
export type SEARCHQUERY_ACTION_CONSTANTS =
  | "NEW_SEARCHQUERY"
  | "CLEAR_SEARCHQUERY";

export interface SearchqueryActions {
  type: SEARCHQUERY_ACTION_CONSTANTS;
  payload: object[];
}

export const searchqueryReducer: React.Reducer<
  SearchqueryListState,
  SearchqueryActions
> = (state, { type, payload }) => {
  switch (type) {
    case "NEW_SEARCHQUERY":
      return {
        ...state,
        searchResults: [payload, state.searchResults],
      };
    case "CLEAR_SEARCHQUERY":
      return {
        ...state,
        searchResults: [initialSearchqueryListState],
      };
  }
};
