import moviesReducer from '../moviesReducer';
import * as types from '../../types/movies';

describe('fetch movies reducer', () => {
  const initialState = {
    movies: [],
    error: false,
    isLoading: false,
  };
  it('should return initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });
  it('should test LOADING', () => {
    const action = {
      type: types.LOADING,
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });
  it('should test LOADED', () => {
    const action = {
      type: types.LOADED,
      payload: {
        data: ['movie data'],
      },
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: !action.payload.data.length,
      movies: action.payload.data,
    });
  });
  it('should test ERROR', () => {
    const action = {
      type: types.ERROR,
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });
});
