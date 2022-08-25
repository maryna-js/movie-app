import {
  FETCH_MOVIES_LOADED,
  FETCH_MOVIES_ERROR,
} from './actionTypes';
import { BASE_URL } from '../constants';

const fetchDataLoaded = (payload) => ({
  type: FETCH_MOVIES_LOADED,
  payload,
});

const fetchDataError = () => ({
  type: FETCH_MOVIES_ERROR,
});

const fetchMovies = () => (
  dispatch
) => {
  return fetch(BASE_URL)
    .then((res) => res.json())
      .then((movies) =>
          dispatch(fetchDataLoaded({ data: movies.Search }))
      )
    .catch(() => dispatch(fetchDataError()));
};

export default fetchMovies;
