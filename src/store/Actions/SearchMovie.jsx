import * as actionTypes from "./actions";
import Axios from "axios";

export const searchMovieStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIE_START
  };
};
export const searchMovieSuccess = movie => {
  return {
    type: actionTypes.SEARCH_MOVIE_SUCCESS,
    movie
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
      `https://api.themoviedb.org/3/movie/top_rated?api_key=f59105d2523e3fcebe1e4a83f7abb717&language=en-US&query=` +
        encodeURI(movie)
    )
      .then(res => {
        dispatch(searchMovieSuccess(res.results));
      })
      .catch(error => {
        dispatch(searchMovieFail(error));
      });
  };
};
