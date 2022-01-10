import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../Public/StyleSheet/favoriteMovies.css'
//import {favoriteMovies} from  "../components/MovieCarosel";


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
                    return <div className="favorite-card">
                            <h1>- {item.movieTitle}</h1>
                        </div>
                    
                })
                :<h1>No movies are in your favorites list.</h1>
                }
            </div>
            <Footer />
        </div>
    )
}

export default FavoriteMovies