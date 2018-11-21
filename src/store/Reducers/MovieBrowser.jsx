import * as actionTypes from "../Actions/actions";

const initialState = {
  movies: null,
  error: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_MOVIES_SUCCESS:
      return {
        ...state,
        topMovies: action.topMovies
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
