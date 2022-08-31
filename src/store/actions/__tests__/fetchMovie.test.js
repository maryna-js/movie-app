import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from '../../types/movie';
import { BASE_URL } from '../../constants';
import movie from '../../../__mocks__/mockMovie.json';
import fetchMovie from '../fetchMovie';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMovie', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should test LOADED', () => {
    fetchMock.getOnce(`${BASE_URL}&i=tt0076759`, {
      headers: { 'content-type': 'application/json' },
      body: movie,
    });
    const expectedActions = [
      {
        type: types.LOADING,
      },
      {
        type: types.LOADED,
        payload: movie,
      },
    ];
    const store = mockStore({});
    return store.dispatch(fetchMovie('tt0076759')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should test ERROR', () => {
    fetchMock.getOnce(`${BASE_URL}&i=tt0076759`, {
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Error while fetching'),
    });
    const expectedActions = [
      {
        type: types.LOADING,
      },
      {
        type: types.ERROR,
        payload: new TypeError('Error while fetching'),
      },
    ];
    const store = mockStore({});
    return store.dispatch(fetchMovie('tt0076759')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
