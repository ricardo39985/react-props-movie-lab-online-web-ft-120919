import React, { Component } from "react";
import zero from "../assets/stars/0-stars.png";
import one from "../assets/stars/1-stars.png";
import two from "../assets/stars/2-stars.png";
import three from "../assets/stars/3-stars.png";
import four from "../assets/stars/4-stars.png";
import five from "../assets/stars/5-stars.png";

const imgMapper = { 0: zero, 1: one, 2: two, 3: three, 4: four, 5: five };

export default class CardBack extends Component {
	generateRatingElement = () => {
		// implement meeeee! See the readme for instructions
		if (this.props.IMDBRating !== null) {
			return <img src={imgMapper[this.props.IMDBRating]} alt="" />;
		}
		return <h4>No Rating Found</h4>;
	};

	render() {
		return (
			<div className="card-back">
				<h5 className="title">{this.props.title}</h5>
				<span />
				{this.generateRatingElement()}
				<span />
				<p className="genres">{this.props.genres.join(', ')}</p>
			</div>
		);
	}
}

CardBack.defaultProps = {
	// posterSrc: 'http://i.imgur.com/bJw8ndW.png',
	title: "Unknown",
	IMDBRating: null,
};
// genres should receive a value that will work with our CardBack component's rendering method for genres. The screen should read: 'No Genre(s) Found'
