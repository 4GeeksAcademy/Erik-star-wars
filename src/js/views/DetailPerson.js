import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPerson = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.getDetailPeople(params.id)
	}, [])

	useEffect(() => {
		console.log(store.detailpeople)
	}, [store.detailpeople])

	console.log(store.detailpeople)
	if (!store.detailpeople) return null;
	console.log(store.detailpeople)

	return (


		<div className="jumbotron">
			<div className="character-card mx-auto mt-3">
				<div className="character-header">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt="..." />
					<img src="" className="character-image" />
					<div className="character-details">
						<h1 className="character-name">{store.detailpeople.name}</h1>
					</div>
				</div>
				<div className="character-info">
					<div className="info-column">
						<h3>Height</h3>
						<p>{store.detailpeople.height}</p>
					</div>
					<div className="info-column">
						<h3>Mass</h3>
						<p>{store.detailpeople.mass}</p>
					</div>
					<div className="info-column">
						<h3>Gender</h3>
						<p>{store.detailpeople.gender}</p>
					</div>
					<div className="info-column">
						<h3>Eye color</h3>
						<p>{store.detailpeople.eye_color}</p>
					</div>
					<div className="info-column">
						<h3>Hair color</h3>
						<p>{store.detailpeople.hair_color}</p>
					</div>
				</div>
			</div>

		</div>


	);


}



