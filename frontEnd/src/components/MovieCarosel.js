import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
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
import left from '../Public/Images/left-arrow.png'
import right from '../Public/Images/next.png'

function MovieCarosel(props) {

    const [movieData, setMovieData] = useState([]); 
    const [caroselArr, setCaroselArr] = useState([])
    const [move, setMove] = useState(0)
    const [favoriteMovies, setFavoriteMovies] = useState([])
    
    
    useEffect(() => {
        GetDataByGenre(props.query)
          .then(res => {
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
          try{
              movieData.forEach((item) =>{
              i++
              master++
              if(i <= 4){
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
          }catch(error){
            console.error(error)
          }
      }

      carosel()

      function moveCarosel(e){
          if(move > mainArr.length){
              setMove(0)
          }else{
            //console.log(e)
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
                <div className='left-btn' onClick={moveCarosel}><img src={left}/></div>
                {mainArr.length > 0 
                ?
                mainArr[move].map((item) => {
                    //console.log(item)
                    return <div className='movie-card'>
                        <h2>{item.title}</h2>
                        <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}></img>
                        <p className='rating'>{item.vote_average}/10</p>
                        <Link to={`/IndividualMovie:${item.id}`} className="more-info-button">More Info</Link>
                    </div>
                })
                :<h1>Loading...</h1>}
                
                <div className='right-btn' onClick={moveCarosel}><img src={right} /></div>
            </div>
        </div>
    )

  
}

export default MovieCarosel
