import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import movies from '../../__mocks__/mockMovies.json';
import { MoviesList } from './MoviesList';

const mockStore = configureStore([]);

describe('movies list', () => {
  ReactDOM.createPortal = jest.fn((element) => element);
  const history = createMemoryHistory();
  history.push('/');
  const store = mockStore({
    movies: {
      movies,
      error: false,
      isLoading: false,
    },
  });
  store.dispatch = jest.fn();
  const getComponent = () =>
    render(
      <Provider store={store}>
        <Router navigator={history}>
          <MoviesList />
        </Router>
      </Provider>
    );
  it('Should render component', () => {
    expect(getComponent().asFragment()).toMatchSnapshot();
  });
  it('Should render with loading', () => {
    const store = mockStore({
      movies: {
        movies: [],
        error: false,
        isLoading: true,
      },
    });
    store.dispatch = jest.fn();
    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MoviesList />
          </Router>
        </Provider>
      );
    expect(getComponent().asFragment()).toMatchSnapshot();
  });
  it('Should render with error', () => {
    const store = mockStore({
      movies: {
        movies: [],
        error: true,
        isLoading: false,
      },
    });
    store.dispatch = jest.fn();
    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MoviesList />
          </Router>
        </Provider>
      );
    const { getByText } = getComponent();
    expect(getByText('Sorry, app is not available')).toBeTruthy();
  });
});
