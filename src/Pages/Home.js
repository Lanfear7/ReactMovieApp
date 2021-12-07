import React from 'react'
import {basicData, horrorData} from '../API/test' //testdata
import MovieCarosel from '../components/MovieCarosel'
import Navbar from '../components/Navbar'





/*
    Have the page "load" and when "loading" have rewind come in from the rigt side but last letter to fist letter stop so its centered
    and have the rewind logo drop down from the top  
 */



function Home() {
    return (
        <div className="home-container">
            <div className="main-nav"> 
                <Navbar />
            </div>
            <h1>Home</h1>
            <MovieCarosel movies={basicData}/>
            <MovieCarosel movies={horrorData}/>
        </div>
    )
}

export default Home
