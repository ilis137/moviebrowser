import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Moviebrowser from "./Components/Moviebrowser/Moviebrowser";
import "./App.css";
import * as actions from "./store/Actions/index";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.getTopMovies();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Moviebrowser />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopMovies: () => dispatch(actions.getTopMoviesStart())
  };
};
const mapStateToProps = state => {
  return {
    topMovies: state.topMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
