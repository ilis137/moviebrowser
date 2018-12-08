import { configure, shallow } from "enzyme";
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
});
