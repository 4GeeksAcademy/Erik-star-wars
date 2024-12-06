import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5 home">
		<h1>Characters</h1>
		<div class="carousel-container">
			<div class="carousel">
				<div class="card">
					<img src="image1.jpg" alt="Image 1" />
					<div class="caption">Time to do something... exciting!</div>
				</div>
				<div class="card">
					<img src="image1.jpg" alt="Image 1" />
					<div class="caption">Time to do something... exciting!</div>
				</div>
				<div class="card">
					<img src="image1.jpg" alt="Image 1" />
					<div class="caption">Time to do something... exciting!</div>
				</div>
				<div class="card">
					<img src="image1.jpg" alt="Image 1" />
					<div class="caption">Time to do something... exciting!</div>
				</div>
			</div>
		</div>
	</div>
);
