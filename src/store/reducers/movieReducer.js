import {
  LOADING,
  LOADED,
  ERROR,
} from '../types/movie';

const initialState = {
  movie: {},
  error: null,
  isLoading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
