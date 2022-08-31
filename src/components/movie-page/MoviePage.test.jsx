import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import movie from '../../__mocks__/mockMovie.json';
import { MoviePage } from './MoviePage';

const mockStore = configureStore([]);

describe('Movie page', () => {
    ReactDOM.createPortal = jest.fn((element) => element);
    const history = createMemoryHistory();
    history.push('/movie/tt0076759');
    const store = mockStore({
        movie: {
            movie,
            error: false,
            isLoading: false,
        },
    });
    store.dispatch = jest.fn();
    const getComponent = () =>
        render(
            <Provider store={store}>
                <Router navigator={history}>
                    <MoviePage />
                </Router>
            </Provider>
        );
    it('Should render component', () => {
        expect(getComponent().asFragment()).toMatchSnapshot();
    });
    it('Should render with loading', () => {
        const store = mockStore({
            movie: {
                movie: {},
                error: false,
                isLoading: true,
            },
        });
        store.dispatch = jest.fn();
        const getComponent = () =>
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <MoviePage />
                    </Router>
                </Provider>
            );
        expect(getComponent().asFragment()).toMatchSnapshot();
    });
    it('Should render with error', () => {
        const store = mockStore({
            movie: {
                movie: {},
                error: true,
                isLoading: false,
            },
        });
        store.dispatch = jest.fn();
        const getComponent = () =>
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <MoviePage />
                    </Router>
                </Provider>
            );
        const { getByText } = getComponent();
        expect(getByText('Sorry, movie is not available')).toBeTruthy();
    });
});
