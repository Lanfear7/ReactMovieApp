import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import '../Public/StyleSheet/favoriteMovies.css'
//import {favoriteMovies} from  "../components/MovieCarosel";

=======
>>>>>>> 795a13e18d94b2f47c2a67830493883e7b18c7ba

function FavoriteMovies(){
    
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
<<<<<<< HEAD
                {storeageArr.length > 0
                ?
                storeageArr.map((item) => {
                    return <div className="favorite-card">
                            <h1>- {item.movieTitle}</h1>
                        </div>
                    
                })
                :<h1>No movies are in your favorites list.</h1>
                }
=======
            {storeageArr.length > 0
            ?
            storeageArr.map((item) => {
                return <div>
                        <h1>{item.movieTitle}</h1>
                        <img src ={item.moviePoster}></img>
                        <p>{item.movieRating}/10</p>
                    </div>
                
            })
            :<h1>Loading...</h1>}
>>>>>>> 795a13e18d94b2f47c2a67830493883e7b18c7ba
            </div>
            <Footer />
        </div>
    )
}

export default FavoriteMovies