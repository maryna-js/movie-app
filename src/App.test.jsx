import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import movies from './__mocks__/mockMovies.json';
import App from './App';

const mockStore = configureStore([]);

describe('App', () => {
    const store = mockStore({
        movies: { movies },
    });
    store.dispatch = jest.fn();
    const history = createMemoryHistory();

    it('Should render main page', () => {
        history.push('/');
        const getComponent = () =>
            render(
                <Router navigator={history}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </Router>
            );
        expect(getComponent({}).asFragment()).toMatchSnapshot();
    });
});

