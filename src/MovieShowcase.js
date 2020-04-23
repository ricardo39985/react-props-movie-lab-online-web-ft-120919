import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";
import CardFront from "./card-components/CardFront.js";

export default class MovieShowcase extends Component {

	generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((m, i) => <MovieCard
          key={i}
          title={m.title}
          IMDBRating={m.IMDBRating}
          genres={m.genres}
          poster={m.poster}
        />)
	
	};

	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
}
