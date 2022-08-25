import {
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_LOADED,
  FETCH_MOVIES_ERROR,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  error: false,
  isLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case FETCH_MOVIES_LOADED:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        error: !action.payload.data.length,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
