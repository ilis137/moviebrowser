import React, { Component } from "react";
import MovieCard from "../Movielist/MovieCard/MovieCard";
import { connect } from "react-redux";
import * as actions from "../../../store/Actions/index";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Modal from "../Modal/Modal";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};

class MovieSearch extends Component {
  componentWillReceiveProps() {
    console.log(this.props.location.search);
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      this.props.searchMovie(param[1]);
      console.log(param[1]);
    }
  }

  render() {
    return (
      <>
        <Modal />
        <Grid container>
          {this.props.movies
            ? this.props.movies.map(movie => {
                return (
                  <Grid
                    style={styles.movieColumn}
                    item
                    key={movie.id}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                  >
                    <MovieCard movie={movie} />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchMovie: movie => dispatch(actions.searchMovie(movie))
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MovieSearch)
);
