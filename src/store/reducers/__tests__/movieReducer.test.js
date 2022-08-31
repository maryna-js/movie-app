import movieReducer from '../movieReducer';
import * as types from '../../types/movie';

describe('fetch movie reducer', () => {
  const initialState = {
    movie: {},
    error: null,
    isLoading: false,
  };
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });
  it('should test LOADING', () => {
    const action = {
      type: types.LOADING,
    };
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('should test LOADED', () => {
    const action = {
      type: types.LOADED,
      payload: { title: 'Harry Potter' },
    };
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      movie: action.payload,
    });
  });
  it('should test ERROR', () => {
    const action = {
      type: types.ERROR,
      payload: 'error',
    };
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: action.payload,
    });
  });
});
