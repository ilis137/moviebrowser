import * as actionTypes from "./actions";
import Axios from "axios";

export const getTopMoviesStart = () => {
  return dispatch => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f59105d2523e3fcebe1e4a83f7abb717&language=en-US&page=1"
    )
      .then(res => {
        console.log(res.data.results);
        dispatch(getTopMoviesSuccess(res.data.results));
      })
      .catch(error => console.log(error));
  };
};

export const getTopMoviesSuccess = movies => {
  return {
    type: actionTypes.GET_TOP_MOVIES_SUCCESS,
    topMovies: movies
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
