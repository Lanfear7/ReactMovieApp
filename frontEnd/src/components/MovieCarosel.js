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
    const [caroselArr, setCaroselArr] = useState([])
    const [move, setMove] = useState(0)
    const [favoriteMovies, setFavoriteMovies] = useState([])
    
    useEffect(() => {
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
              if(i < 6){
                  pushArr.push(item)
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

      function moveCarosel(e){
          if(move > mainArr.length){
              setMove(0)
          }else{
            console.log(e.target.innerHTML)
            if(e.target.innerHTML == "Left"){
                if(move == 0){
                    setMove(mainArr.length - 1)
                }else{
                    setMove(move - 1)
                }
            }else{
                if(move == mainArr.length - 1){
                    setMove(0)
                }else{
                    setMove(move + 1)
                }
            }
          }
      }


    return (
        <div className="movie-carosel">
            <h1>{props.genre}</h1>
            <div className="movie-row">
                <div className='left-btn'><button onClick={moveCarosel}>Left</button></div>
                {mainArr.length > 0 
                ?
                mainArr[move].map((item) => {
                    console.log(item)
                    return <div className='movie-card'>
                        <h1>{item.title}</h1>
                        <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}></img>
                        <button>Add To Favorites</button>
                    </div>
                })
                :<h1>Loading...</h1>}
                <div className='right-btn'><button onClick={moveCarosel}>Right</button></div>
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
