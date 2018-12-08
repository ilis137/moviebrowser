import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import * as actions from "../../../store/Actions/index";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
const styles = {
  // Can use functions to dynamically build our CSS
  dialogContent: backgroundUrl => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w780${backgroundUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",

    color: "white",
    padding: 10
  })
};
class Modal extends React.Component {
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { modalOpen, movie, onModalClosed } = this.props;
    const genres =
      movie && movie.genres
        ? movie.genres.map(genre => genre.name).join(", ")
        : "";
    return (
      <div>
        <Dialog
          open={modalOpen}
          onClose={onModalClosed}
          aria-labelledby="responsive-dialog-title"
          style={{ textAlign: "center" }}
        >
          <div style={styles.dialogContent(movie.backdrop_path)}>
            <h1>{movie.title}</h1>
            <h5>{genres}</h5>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Release date: {movie.release_date}</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    modalOpen: state.modalOpen,

    movie: state.detailedMovie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onModalClosed: () => dispatch(actions.closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
