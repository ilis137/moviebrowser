import * as actionTypes from "../Actions/actions";

const initialState = {
  movies: null,
  error: null,
  isLoading: false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_MOVIES_START:
      return {
        ...state,
        isLoading: true
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
    default:
      return state;
  }
};

export default Reducer;
