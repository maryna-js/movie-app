import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import moviesReducer from '../moviesReducer';

describe('root reducer', () => {
  const store = createStore(rootReducer);
  it('should unite different reducers', () => {
    expect(store.getState().movies).toEqual(moviesReducer(undefined, {}));
  });
});
