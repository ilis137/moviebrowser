import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardTitle } from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
const styles = {
  cardMedia: {
    maxHeight: 500,
    overflow: "hidden"
  },
  card: {
    cursor: "pointer",
    height: "auto",
    overflow: "hidden",
    margin: "20px"
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
          <CardMedia style={styles.cardMedia}>
            <img
              style={styles.bgImage}
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
            </CardContent>
          </CardMedia>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
