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
    let faveMovieArr = 0
    
    let storageItems = localStorage
    
    let storeageArr = []
    for(let i = 0; i < storageItems.length; i++){
        storeageArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }



    return(
        <div className="favorite-movie-container">

            <div className="favorite-movie-nav">
                <Navbar />
            </div>
            <div className="favorite-movie-content-container">
            {storeageArr.length > 0
            ?
            storeageArr.map((item) => {
                return <div>
                        <h1>{item.movieTitle}</h1>
                    </div>
                
            })
            :<h1>Loading...</h1>}
            </div>
            <Footer />
        </div>
    )
}

export default FavoriteMovies