import {
  LOADED,
  ERROR,
} from '../types/movies';
import { BASE_URL } from '../constants';

const fetchDataLoaded = (payload) => ({
  type: LOADED,
  payload,
});

const fetchDataError = () => ({
  type: ERROR,
});

const fetchMovies = () => (
  dispatch
) => {
  return fetch(`${BASE_URL}&s=star&page=1`)
    .then((res) => res.json())
      .then((movies) =>
          dispatch(fetchDataLoaded({ data: movies.Search }))
      )
    .catch(() => dispatch(fetchDataError()));
};

export default fetchMovies;
