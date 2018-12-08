import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import Modal from "./Modal/Modal";
import MovieList from "./Movielist/MovieList";
import Moviebrowser from "./Moviebrowser";

configure({ adapter: new Adapter() });
describe("Navbar test", () => {
  it("should render one <MovieList/> component", () => {
    const wrapper = shallow(<Moviebrowser />);

    expect(wrapper.find(MovieList)).toHaveLength(1);
  });

  it("should render one <MovieList/> component", () => {
    const wrapper = shallow(<Moviebrowser topMovies="pulp" />);

    expect(wrapper.contains(<MovieList movies="pulp" />)).toEqual(true);
  });
  it("should render Modal", () => {
    const wrapper = shallow(<Moviebrowser />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
