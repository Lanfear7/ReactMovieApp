import React, {useEffect, useState} from 'react'
import ReactDOM, { render } from 'react-dom'
import {
     GetDataByGenre,
     fetchPopularMovies,
     fetchTopRatedMovies,
     fetchNowPlayingMovies,
     fetchUpComingMovies,
     fetchSingleMovieData
     } from '../API/context'

function MovieCarosel(props) {

    const [movieData, setMovieData] = useState([]); 
    const [favoriteMovies, setFavoriteMovies] = useState([])
    
    console.log(GetDataByGenre(27))
    
    function MovieCardHover(e){
        if (e.target.className != "movie-card"){
            console.log('find div in dom')
            //got to parent element
        }else{
            console.log('GOT DIV')
            //have the card blow up 1.3x add animation with fromaer motion
        }

    }


    // let addToFaveList = () => {setFavoriteMovies(this.movieCards)}        //dont think this would logically work because if you use this in an arrow function it
    //                                                                         refers to the object that defines the function rather than the object that triggered the function
    //                                                                         to execute (the "add to faves" button in this case)


    let movieCards = props.movies.map((data, i) => 
        <div key={i} className="movie-card" onMouseOver={MovieCardHover}>
            <img src="#"/>
            <h4 className="movie-title">{data.Title}</h4>
            <button type = "button" onClick ={addToFaveList}>Add To Favorites</button>
        </div>
        
    )

    //something like this? need global state?
    function addToFaveList(e){
        let clickedFave = e.target.value
        console.log(clickedFave)
        setFavoriteMovies(...this.movieCards)
        console.log(favoriteMovies, "fave movies")
    }


    return (
        <div className="movie-carosel">
            <h1>{props.movies[0].Genre}</h1>
            <div className="movie-row">
                {movieCards}
            </div>
        </div>
    )
}

export default MovieCarosel
