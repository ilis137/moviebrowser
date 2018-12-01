import React from "react";
import MovieCard from "../Movielist/MovieCard/MovieCard";

import { Grid } from "@material-ui/core";

import Modal from "../Modal/Modal";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};

const MovieSearch = props => {
  console.log(props);
  return (
    <>
      <Modal />
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
    </>
  );
};
export default MovieSearch;
