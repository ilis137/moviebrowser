import React from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard/MovieCard";
import Loader from "./Loader/Loader";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};

const MovieList = props => {
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

export default MovieList;
