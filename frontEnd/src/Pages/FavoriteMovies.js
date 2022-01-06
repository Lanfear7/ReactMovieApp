import React from "react";
import Background from '../Public/Images/background.jpg'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import {favoriteMovies} from  "../components/MovieCarosel";
import MovieCarosel from "../components/MovieCarosel";
import {index} from "../Pages/IndividualMovie";


function FavoriteMovies(){
    // console.log(index)
    // console.log(localStorage.getItem("2movieCard" ))
    let faveMovieArr = [JSON.parse(localStorage.getItem("2movieCard"))]
    console.log(faveMovieArr)


    return(
        <div className="favorite-movie-container">

            <div className="favorite-movie-nav">
                <Navbar />
            </div>
            <div className="favorite-movie-content-container">
            {faveMovieArr.length > 0
            ?
            faveMovieArr.map((item) => {
                return <div className="movie-card">
                    <h2>{item.movieTitle}</h2>
                    <img src= {item.moviePoster}></img>
                    <p className ='rating'>{item.movieRating}/10</p>
                </div>
            })
            :<h1>Loading...</h1>}
            </div>
            <Footer />
        </div>
    )
}

export default FavoriteMovies