import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Detail } from "./detail";

export const Home = () => (
	<div className="text-center mt-5 home">
		<div>
			<h1>Characters</h1>
			<div class="carousel-container">
				<div class="carousel">

					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
				</div>
			</div>
		</div>

		<div className="space-ships">
			<h1>Space ships</h1>
			<div class="carousel-container">
				<div class="carousel">
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1" />
						<div class="caption">Time to do something... exciting!</div>
						<div><Link to="/detail" className="btn mb-2">Learn more!</Link></div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
