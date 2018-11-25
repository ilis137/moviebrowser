import React from "react";
import MovieCard from "./Movielist/MovieCard/MovieCard";
import { connect } from "react-redux";
const MovieSearch = props => {
  return (
    <>
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
      <Loader />
    </>
  );
};
const mapStateToProps = state => {
  return {
    movies: state.searchedMovieResults
  };
};
export default connect(mapStateToProps)(MovieSearch);
