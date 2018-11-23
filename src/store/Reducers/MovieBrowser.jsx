import * as actionTypes from "../Actions/actions";

const initialState = {
  movies: null,
  error: null,
  isLoading: false,
  modalOpen: false,
  detailedMovie: ""
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
        movie: ""
      };
    case actionTypes.GET_TOP_MOVIES_SUCCESS:
      return {
        ...state,
        topMovies: action.topMovies,
        isLoading: false
      };
    case actionTypes.GET_TOP_MOVIES_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.GET_MOVIE_DETAILS:
      return {
        ...state,
        modalOpen: true,
        detailedMovie: action.detailedMovie
      };
    default:
      return state;
  }
};

export default Reducer;
