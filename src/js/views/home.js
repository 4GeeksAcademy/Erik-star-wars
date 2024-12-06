import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Detail } from "./detail";

export const Home = () => (
	<div className="mt-5 home">
		<div className="">
			<h1 className="text-center">Characters</h1>
			<div class="carousel-container mx-auto">
				<div class="carousel">

					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption d-block mx-2">
							<div className="m-0">
								<p>Gender:</p>
							</div>
							<div>
								<p>Hair color:</p>
							</div>
							<div>
								<p>Eye color:</p>
							</div>
						</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
					<div class="card">
						<img src="image1.jpg" alt="Image 1"/>
						<div class="caption">Time to do something... exciting!</div>
						<div className="d-flex justify-content-between m-3"><Link to="/detail" className="btn">Learn more!</Link><button className="btn"><i class="fa-regular fa-heart"></i></button></div>
					</div>
				</div>
			</div>
		</div>

		<div className="space-ships ">
			<h1 className="text-center">Space ships</h1>
			<div class="carousel-container mx-auto">
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
