import * as actionTypes from "../Actions/actions";

const initialState = {
  error: null,
  isLoading: false,
  modalOpen: false,
  detailedMovie: "",
  searchedMovieResults: null,
  movies: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CLOSE_MOVIE_MODAL:
      return {
        ...state,
        modalOpen: false,
        detailedMovie: ""
      };
    case actionTypes.GET_TOP_MOVIES_SUCCESS:
      const existingMovies = state.topMovies ? state.topMovies : [];
      return {
        ...state,
        topMovies: [...existingMovies, ...action.topMovies],
        isLoading: false
      };
    case actionTypes.GET_TOP_MOVIES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.GET_MOVIE_DETAILS:
      return {
        ...state,
        modalOpen: true,
        detailedMovie: action.detailedMovie
      };
    case actionTypes.SEARCH_MOVIE_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        searchedMovieResults: action.movies,
        isLoading: false
      };
    case actionTypes.SEARCH_MOVIE_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};

export default Reducer;
