import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Reducer from "./MovieBrowser";

configure({ adapter: new Adapter() });
describe("reducer", () => {
  it("it should return the initial state", () => {
    expect(Reducer(undefined, {})).toEqual({
      error: null,
      isLoading: false,
      modalOpen: false,
      detailedMovie: "",
      searchedMovieResults: null,
      movies: ""
    });
  });

  it("it should return the next state", () => {
    expect(
      Reducer(
        {
          error: null,
          isLoading: false,
          modalOpen: false,
          detailedMovie: "",
          searchedMovieResults: null,
          movies: ""
        },
        { type: "GET_TOP_MOVIES_START" }
      )
    ).toEqual({
      error: null,
      isLoading: true,
      modalOpen: false,
      detailedMovie: "",
      searchedMovieResults: null,
      movies: ""
    });
  });

  it("it should return Top movies success", () => {
    expect(
      Reducer(
        {
          error: null,
          isLoading: true,
          modalOpen: false,
          detailedMovie: "",
          searchedMovieResults: null,
          movies: ""
        },
        {
          type: "GET_TOP_MOVIES_SUCCESS",
          topMovies: ["hi", "hello", "star wars", "avengers"]
        }
      )
    ).toEqual({
      error: null,
      isLoading: false,
      modalOpen: false,
      detailedMovie: "",
      searchedMovieResults: null,
      movies: "",
      topMovies: ["hi", "hello", "star wars", "avengers"]
    });
  });

  it("it should return error if failed to fetch topMovies", () => {
    expect(
      Reducer(
        {
          error: null,
          isLoading: true,
          modalOpen: false,
          detailedMovie: "",
          searchedMovieResults: null,
          movies: "",
          topMovies: ""
        },
        {
          type: "GET_TOP_MOVIES_FAIL",
          error: "unable to load movies"
        }
      )
    ).toEqual({
      error: "unable to load movies",
      isLoading: false,
      modalOpen: false,
      detailedMovie: "",
      searchedMovieResults: null,
      movies: "",
      topMovies: ""
    });
  });
});
