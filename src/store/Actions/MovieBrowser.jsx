import * as actionTypes from "./actions";
import Axios from "axios";

export const getTopMovies = topMovies => {
  return {
    type: actionTypes.GET_TOP_MOVIES,
    movies: topMovies
  };
};

export const searchMovies = movieName => {
  return {
    type: actionTypes.SEARCH_MOVIE,
    movieName
  };
};
export const getMovieDetails = movieDetail => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS,
    movieDetail
  };
};
