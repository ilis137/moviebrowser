import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Moviebrowser from "./Components/Moviebrowser/Moviebrowser";
import "./App.css";
import * as actions from "./store/Actions/index";
import { connect } from "react-redux";
import * as scrollHelpers from "./Scroll";
import { Route, Switch, withRouter } from "react-router-dom";
import MovieSearch from "./Components/Moviebrowser/MovieSearch/MovieSearch";
class App extends Component {
  state = {
    currentpage: 1
  };

  componentDidMount() {
    console.log(this.props);
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentpage);
  }
  componentDidUpdate() {}

  handleScroll = () => {
    const { isLoading } = this.props;
    if (!isLoading) {
      let pageScrolled = scrollHelpers.getScrollDownPercentage();
      if (pageScrolled >= 1.0) {
        const nextPage = this.state.currentpage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({
          ...this.state,
          currentpage: nextPage
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar handleSearch={this.props.searchMovie} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              console.log(props);
              return (
                <Moviebrowser {...props} topMovies={this.props.topMovies} />
              );
            }}
          />

          <Route
            path="/search"
            render={props => {
              return <MovieSearch {...props} movies={this.props.movies} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopMovies: page => dispatch(actions.getTopMovies(page)),
    searchMovie: movie => dispatch(actions.searchMovie(movie))
  };
};
const mapStateToProps = state => {
  return {
    topMovies: state.topMovies,
    isLoading: state.isLoading,
    movies: state.searchedMovieResults
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
