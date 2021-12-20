import React from 'react'
import {basicData, horrorData} from '../API/test' //testdata
import Footer from '../components/Footer'
import MovieCarosel from '../components/MovieCarosel'
import Navbar from '../components/Navbar'
import Background from '../Public/Images/background.jpg'
import favoriteMovies from './FavoriteMovies'

/*
    Have the page "load" and when "loading" have rewind come in from the rigt side but last letter to fist letter stop so its centered
    and have the rewind logo drop down from the top  
 */

/* All Genres 
    0: {id: 28, name: 'Action'}
    1: {id: 12, name: 'Adventure'}
    2: {id: 16, name: 'Animation'}
    3: {id: 35, name: 'Comedy'}
    4: {id: 80, name: 'Crime'}
    5: {id: 99, name: 'Documentary'}
    6: {id: 18, name: 'Drama'}
    7: {id: 10751, name: 'Family'}
    8: {id: 14, name: 'Fantasy'}
    9: {id: 36, name: 'History'}
    10: {id: 27, name: 'Horror'}
    11: {id: 10402, name: 'Music'}
    12: {id: 9648, name: 'Mystery'}
    13: {id: 10749, name: 'Romance'}
    14: {id: 878, name: 'Science Fiction'}
    15: {id: 10770, name: 'TV Movie'}
    16: {id: 53, name: 'Thriller'}
    17: {id: 10752, name: 'War'}
    18: {id: 37, name: 'Western'}
*/


function Home() {
    return (
        <div className="home-container">
            <div className="background-img">
                <img src={Background} />
            </div>
            <div className="main-nav"> 
                <Navbar />
            </div>
            <div className="content-container"> 
                <MovieCarosel query={'popular'} genre={"Popular"}/>
                <MovieCarosel query={27} genre={"Action"}/>
            </div>
            <Footer />
        </div>
    )
}
export default Home
