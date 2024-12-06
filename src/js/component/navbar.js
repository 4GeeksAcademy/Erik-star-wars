import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">hello</span>
			</Link>
			<p>
			<img className="logo" src={Logo} />
		</p>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary"></button>
				</Link>
				
			</div>
		</nav>
	);
};
