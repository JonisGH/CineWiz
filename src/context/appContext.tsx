import {
  ReactElement,
  ChangeEvent,
  useReducer,
  useCallback,
  useContext,
  createContext,
} from "react";

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

type UserListStateType = {
  favorites: MovieObject[];
  watchlist: MovieObject[];
};

export const initialUserListState: UserListStateType = {
  favorites: [],
  watchlist: [],
};

// Reducer
const enum REDUCER_ACTION_TYPE {
  ADD_TO_WATCHLIST,
  ADD_TO_FAVORITES,
  REMOVE_FROM_WATCHLIST,
  REMOVE_FROM_FAVORITES,
}

type UserListReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload: MovieObject;
};

const userListReducer = (
  state: UserListStateType,
  action: UserListReducerAction
): UserListStateType => {
  switch (action.type) {
    // Favorites Add & Remove
    case REDUCER_ACTION_TYPE.ADD_TO_FAVORITES: {
      if (state.favorites.find((movie) => movie.id === action.payload.id)) {
        return state;
      }
      // put this here because i dont think a favorite movie should be able to be in watchlist
      if (state.watchlist.find((movie) => movie.id === action.payload.id)) {
        return {
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload.id
          ),
          favorites: [action.payload, ...state.favorites],
        };
      }
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    }
    // Watchlist Add & Remove
    case REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST: {
      if (state.watchlist.find((movie) => movie.id === action.payload.id)) {
        return state;
      }
      if (state.favorites.find((movie) => movie.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST: {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    }
    default:
      console.error("An error occurred");
      return state;
  }
};
// Context & Hooks
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
