import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from '../types';
import { BASE_URL } from '../../constants';
import movies from '../../../__mocks__/mockMovies.json';
import fetchMovies from '../fetchMovies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMovies', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });
    it('should create LOADED if fetched', () => {
        fetchMock.getOnce(
            BASE_URL,
            {
                headers: { 'content-type': 'application/json' },
                body: { data: movies.Search },
            }
        );
        const expectedActions = [
            {
                type: types.LOADED,
                payload: { data: movies.Search },
            },
        ];
        const store = mockStore({});
        return store.dispatch(fetchMovies({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should create ERROR if error', () => {
        fetchMock.getOnce(
            BASE_URL,
            {
                headers: { 'content-type': 'application/json' },
                throws: new TypeError('Error'),
            }
        );
        const expectedActions = [
            {
                type: types.ERROR,
            },
        ];
        const store = mockStore({});
        return store.dispatch(fetchMovies({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
