import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Public/Images/rewindLogo.png'
  
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
                <Link to="/TopRated">Top Rated</Link>
                <Link to="/Genres">Genres</Link>
                <Link to="/Favourites">Favourites</Link>
                <Link to="/SignUp">Sign Up</Link>
                <Link to="/SignIn">Sign In</Link>
            </nav>
        </div>
    )
}

export default Navbar
