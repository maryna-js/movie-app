import {
  LOADING,
  LOADED,
  ERROR,
} from '../actions/types';

const initialState = {
  movies: [],
  error: false,
  isLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        error: !action.payload.data.length,
      };
    case ERROR:
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
