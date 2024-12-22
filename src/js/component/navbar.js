import React, { useActionState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { Detail } from "../views/DetailPerson";
import { Home } from "../views/home";
import { Context } from "../store/appContext";

export const Navbar = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>

            <nav class="navbar">
                <div class="navbar-left">
                    <Link to="/" className="btn"><i class="fa-solid fa-house"></i></Link>
                </div>
                <div class="navbar-center">
                    <img src={Logo} />
                </div>
                <div class="navbar-right">

                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            {store.favorites.map((fav) => (
                                <li className="favs">
                                    {fav}
                                    <button className="nav-button" onClick={() => actions.removeFavorite(fav)} >
                                    <i class="fa-solid fa-x"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="navbar-links">
                <a href="#">Characters</a>
                <a href="#">Space ships</a>
                <a href="#">Movies</a>
            </div>
        </div>
    );
}
