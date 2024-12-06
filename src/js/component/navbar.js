import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { Detail } from "../views/detail";
import { Home } from "../views/home";

export const Navbar = () => {
	return (
		<div>
		
    <nav class="navbar">
        <div class="navbar-left">
		<Link to={Home} className="btn"><i class="fa-solid fa-house"></i></Link>
        </div>
        <div class="navbar-center">
		<img src={Logo}/>
        </div>
        <div class="navbar-right">
		
		<div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-regular fa-heart"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Fav</a></li>
  </ul>
</div>
          
        
        </div>
    </nav>
    <div class="navbar-links">
        <Link to={Detail}><i class="fa-solid fa-location-dot"></i></Link>
        <a href="#">Video</a>
        <a href="#">Films</a>
        <a href="#">Series</a>
        <a href="#">Games + Interactive</a>
        <a href="#">Databank</a>
        <a href="#">Disney+</a>
    </div>
	</div>
	);
}
