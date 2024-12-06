import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<div className="character-card mx-auto mt-3">
				<div className="character-header">
					<img src="luke-skywalker.jpg" alt="Luke Skywalker" className="character-image"/>
						<div className="character-details">
							<h1 className="character-name">Luke Skywalker</h1>
							<p className="character-description">
								Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith.
							</p>
						</div>
				</div>
				<div className="character-info">
					<div className="info-column">
						<h3>Appearances</h3>
						<p>Star Wars: Episode III Revenge of the Sith,</p>
						<p>Star Wars: Episode IV A New Hope,</p>
						<p>Star Wars: Episode V The Empire Strikes Back,</p>
						<p>Star Wars: Episode VI Return of the Jedi</p>
					</div>
					<div className="info-column">
						<h3>Affiliations</h3>
						<p>Rebel Alliance, Jedi Order</p>
						<h3>Locations</h3>
						<p>Polis Massa, Lars Moisture Farm, Tatooine</p>
					</div>
					<div className="info-column">
						<h3>Gender</h3>
						<p>Male</p>
						<h3>Dimensions</h3>
						<p>Height: 1.72m</p>
						<h3>Species</h3>
						<p>Human</p>
					</div>
					<div className="info-column">
						<h3>Weapons</h3>
						<p>Lightsaber, Blaster Pistol, Luke's Lightsaber</p>
						<h3>Vehicles</h3>
						<p>X-wing Starfighter, T-16 Skyhopper</p>
					</div>
				</div>
			</div>
		
		</div>
	);
};

Detail.propTypes = {
	match: PropTypes.object
};
