import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
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

    let movieCards = props.movies.map((data, i) => 
        <div key={i} className="movie-card" onMouseOver={MovieCardHover}>
            <img src="#"/>
            <h4 className="movie-title">{data.Title}</h4>
            <button type="button">Like</button>
        </div>
    )


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
