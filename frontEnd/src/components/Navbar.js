import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Public/Images/rewindLogo.png'
import '../Public/StyleSheet/nav.css'
function Navbar() {
    return (
        <div className="nav-bar">  
            <div className="logo-container">
                <Link to="/"> 
                    <h1>Rewind</h1>
                    <img className="main-logo" src={Logo}/>
                </Link>
            </div>          
            <nav>
                <Link to="/About">About</Link>
                <Link to="/TopRated">Top Rated</Link>
                <Link to="/Genres">Genres</Link>
                <Link to="/Favorites">Favorites</Link>
                <Link to="/SignUp">Sign Up</Link>
                <Link to="/SignIn">Sign In</Link>
                <Link to="/IndividualMovie">indiv movie</Link>
            </nav>
        </div>
    )
}

export default Navbar
