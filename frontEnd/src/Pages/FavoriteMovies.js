import React from "react";
import Background from '../Public/Images/background.jpg'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import {favoriteMovies} from  "../components/MovieCarosel";
import MovieCarosel from "../components/MovieCarosel";


function FavoriteMovies(){
    return(
        <div className="favorite-movie-container">
            {/* <div className="background-img">
            <img src = {Background} />
            </div> */}
            <div className="favorite-movie-nav">
                <Navbar />
            </div>
            <div className="favorite-movie-content-container">
            
            </div>
        </div>
    )
}

export default FavoriteMovies