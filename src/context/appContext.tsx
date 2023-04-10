import React, {
  ReactElement,
  useReducer,
  useCallback,
  useContext,
  createContext,
} from "react";

import userListReducer from "../hooks/reducer/userListReducer";

export type MovieObject = {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  id: number;
  overview: string;
  favorite?: boolean;
  watchlist?: boolean;
};

export type UserListStateType = {
  favorites: MovieObject[];
  watchlist: MovieObject[];
};

type DetailsPageType = {
  movie: MovieObject;
};

export const enum REDUCER_ACTION_TYPE {
  ADD_TO_WATCHLIST,
  ADD_TO_FAVORITES,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_FAVORITES,
  SEND_TO_DETAILS,
}

export const initialUserListState: UserListStateType = {
  favorites: [],
  watchlist: [],
};

export const initialDetailsPageState: DetailsPageType = {
  movie: {
    title: "The Mockening Movie",
    release_date: "2020-20-20",
    poster_path: "/mockURLmOcKuRl",
    vote_average: 5.5,
    id: 1337,
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessit",
  },
};

// Context
const useUserListContext = (initialUserListState: UserListStateType) => {
  const [state, dispatch] = useReducer(userListReducer, initialUserListState);

  /*/ Making use of useCallback here to prevent components from rerendering /*/
  const addToFavorites = useCallback((movie: MovieObject) => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD_TO_FAVORITES, payload: movie });
  }, []);

  const removeFromFavorites = useCallback((movie: MovieObject) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.REMOVE_FROM_FAVORITES,
      payload: movie,
    });
  }, []);

  const addToWatchlist = useCallback((movie: MovieObject) => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
  }, []);

  const removeFromWatchlist = useCallback((movie: MovieObject) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST,
      payload: movie,
    });
  }, []);

  return {
    state,
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
  };
};

type UseUserListContextType = ReturnType<typeof useUserListContext>;

const initialUserListContextState: UseUserListContextType = {
  state: initialUserListState,
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
};

export const UserListContext = createContext<UseUserListContextType>(
  initialUserListContextState
);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const UserlistProvider = ({
  children,
  ...initialUserListState
}: ChildrenType & UserListStateType): ReactElement => {
  return (
    <UserListContext.Provider value={useUserListContext(initialUserListState)}>
      {children}
    </UserListContext.Provider>
  );
};

type UserListHookType = {
  state: UserListStateType;
  addToFavorites: (movie: MovieObject) => void;
  removeFromFavorites: (movie: MovieObject) => void;
  addToWatchlist: (movie: MovieObject) => void;
  removeFromWatchlist: (movie: MovieObject) => void;
};

export const useManageUserLists = (): UserListHookType => {
  const {
    state,
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
  } = useContext(UserListContext);
  return {
    state,
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
  };
};
