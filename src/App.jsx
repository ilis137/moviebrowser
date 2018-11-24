import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Moviebrowser from "./Components/Moviebrowser/Moviebrowser";
import "./App.css";
import * as actions from "./store/Actions/index";
import { connect } from "react-redux";
import * as scrollHelpers from "./Scroll";
class App extends Component {
  state = {
    currentpage: 1
  };

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentpage);
  }

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
        <Navbar />
        <Moviebrowser topMovies={this.props.topMovies} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopMovies: page => dispatch(actions.getTopMovies(page))
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
