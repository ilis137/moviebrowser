import React from "react";
import MovieList from "./Movielist/MovieList";
import { Grid } from "@material-ui/core";
import Modal from "./Modal/Modal";

const Moviebrowser = props => {
  console.log("in moviebrowser");
  console.log(props);
  return (
    <>
      <Modal />
      <Grid container spacing={24}>
        <Grid container>
          <MovieList movies={props.topMovies} />
        </Grid>
      </Grid>
    </>
  );
};

export default Moviebrowser;
