import React from 'react'
import Slider from 'react-slick'

function MovieCarosel(props) {


    let movieCards = props.movies.map((data) => 
        <div className="movie-card">
            <h4>{data.Title}</h4>
        </div>
    )


    return (
        <div>
            <h1>{props.movies[0].Genre}</h1>
            <div className="movie-row">
                {movieCards}
            </div>
        </div>
    )
}

export default MovieCarosel
