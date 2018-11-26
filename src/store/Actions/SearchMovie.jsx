import * as actionTypes from "./actions";
import Axios from "axios";

export const searchMovieStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIE_START
  };
};
export const searchMovieSuccess = movies => {
  return {
    type: actionTypes.SEARCH_MOVIE_SUCCESS,
    movies
  };
};
export const searchMovieFail = error => {
  return {
    type: actionTypes.SEARCH_MOVIE_FAIL,
    error
  };
};
export const searchMovie = movie => {
  return dispatch => {
    dispatch(searchMovieStart());

    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=f59105d2523e3fcebe1e4a83f7abb717&language=en-US&query=${movie}&page=1&include_adult=false`
    )
      .then(res => {
        console.log(res);
        dispatch(searchMovieSuccess(res.data.results));
      })
      .catch(error => {
        dispatch(searchMovieFail(error));
      });
  };
};
