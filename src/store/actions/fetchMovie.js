import {
  LOADING,
  LOADED,
  ERROR,
} from '../types/movie';
import {BASE_URL} from "../constants";

const fetchData = () => ({
  type: LOADING,
});

const fetchDataLoaded= (payload) => ({
  type: LOADED,
  payload,
});

const fetchDataError = (err) => ({
  type: ERROR,
  payload: err,
});

const fetchMovie = (id) => (dispatch) => {
  dispatch(fetchData());
  return fetch(`${BASE_URL}&i=${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(fetchDataLoaded(data)))
    .catch((err) => dispatch(fetchDataError(err)));
};

export default fetchMovie;
