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
    console.log("in app");
    return (
      <div className="App">
        <Navbar />
        <Moviebrowser topMovies={this.props.topMovies} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopMovies: () => dispatch(actions.getTopMovies())
  };
};
const mapStateToProps = state => {
  return {
    topMovies: state.topMovies,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
