import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import moviesReducer from '../moviesReducer';
import movieReducer from '../movieReducer';

describe('root reducer', () => {
  const store = createStore(rootReducer);
  it('should combine different reducers', () => {
    expect(store.getState().movies).toEqual(moviesReducer(undefined, {}));
    expect(store.getState().movie).toEqual(movieReducer(undefined, {}));
  });
});
