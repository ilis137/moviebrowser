import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { CardTitle } from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  cardMedia: {
    maxHeight: 394,
    overflow: "hidden"
  },
  card: {
    cursor: "pointer",
    height: 400,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%"
  }
};

class MovieCard extends Component {
  state = {
    isMouseOver: false
  };

  render() {
    const { movie, isModalOpen } = this.props;
    const subtitle = this.state.isMouseOver ? movie.overview : null;
    return (
      <div>
        <Card
          style={styles.card}
          onMouseOver={() => this.setState({ isMouseOver: true })}
          onMouseLeave={() => this.setState({ isMouseOver: false })}
        >
          <CardMedia style={styles.cardMedia} image={movie.poster_path} />
        </Card>
      </div>
    );
  }
}

export default MovieCard;
