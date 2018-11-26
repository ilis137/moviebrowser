import React from "react";
import MovieCard from "../Movielist/MovieCard/MovieCard";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Loader from "../Movielist/Loader/Loader";
const styles = {
  movieColumn: {
    marginBottom: 20
  }
};

const MovieSearch = props => {
  return (
    <Grid container>
      {props.movies
        ? props.movies.map(movie => {
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
  );
};
const mapStateToProps = state => {
  return {
    movies: state.searchedMovieResults
  };
};
export default connect(mapStateToProps)(MovieSearch);
