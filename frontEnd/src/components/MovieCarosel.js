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

import "../Public/StyleSheet/carosel.css"

function MovieCarosel(props) {

    const [movieData, setMovieData] = useState([]); 
    const [favoriteMovies, setFavoriteMovies] = useState([])
    
    useEffect(() => {
        if(props.genre === "Popular"){
            console.log('YESSIR')
        }
        GetDataByGenre(props.query)
          .then(res => {
              console.log(res.results)
              setMovieData(res.results)
          })
          .catch(err => {
              console.log(err)
          })
      }, [])

      let mainArr = []
      function carosel(){
          let pushArr = []
          let i = 0;
          let master = 0;
          movieData.forEach((item) =>{
              i++
              master++
              if(i < 7){
                  pushArr.push(`<div>
                      <h1>${item.title}</h1>
                  </div>`)
                  if(master == movieData.length){
                      mainArr.push(pushArr)
                  }
              }
              else{
                  mainArr.push(pushArr)
                  pushArr = []
                  i = 0
              }
          })
          console.log(mainArr)
      }

      carosel()


    return (
        <div className="movie-carosel">
            <h1>{props.genre}</h1>
            <div className="movie-row">
                {mainArr.length > 0 
                ?movieData.map((item) => {
                    return <div className='movie-card'>
                        <h1>{item.title}</h1>
                        <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}></img>
                        <button>Add To Favorites</button>
                    </div>
                })
                :<h1>Loading...</h1>}
            </div>
        </div>
    )


    // let addToFaveList = () => {setFavoriteMovies(this.movieCards)}        //dont think this would logically work because if you use this in an arrow function it
    //                                                                         refers to the object that defines the function rather than the object that triggered the function
    //                                                                         to execute (the "add to faves" button in this case)
    //something like this? need global state?
    function addToFaveList(e){
        let clickedFave = e.target.value
        console.log(clickedFave)
        setFavoriteMovies(...this.movieCards)
        console.log(favoriteMovies, "fave movies")
    }
}

export default MovieCarosel
