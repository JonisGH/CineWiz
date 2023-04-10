import {
  UserListStateType,
  MovieObject,
  REDUCER_ACTION_TYPE,
} from "../../context/appContext";

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

export default userListReducer;
