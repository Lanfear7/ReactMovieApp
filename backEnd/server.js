const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3001

require('dotenv').config() //allows us to use .env file

app.use(cors())
app.use(express.json()) 
app.set('json spaces', 2) //formats the json 

app.get('/', async (req, res) => {
    res.json({msg : "React movie app BackEnd!"})
})

app.get('/popularMovies', async (req, res) => {
    try{
        const data = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        res.json(data.data)
    }catch(error){
        res.json({error: "Error occured"})
    }
    
})

app.get('/genre/:id', async (req, res) =>{
    let query = req.params.id
    try{
        const data = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}&with_watch_monetization_types=flatrate1`)
        res.json(data.data)
    }catch(error){
        res.json({error: "Error occured"})
    }   
})

app.get('/topRated', async (req,res) => {
    try{
        const data = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        res.json(data.data)
    }catch(error){
        res.json({error: "Error occured"})
    } 
})

app.get('/nowPlaying', async (req,res) => {
    try{
        const data = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        res.json(data.data)
    }catch(error){
        res.json({error: "Error occured"})
    }
})

app.get('/upComingMovies', async (req,res) => {
    try{
        const data = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
        res.json(data.data)
    }catch(error){
        res.json({error: "Error occured"})
    }  
})

app.get('/movie/:id', async (req,res) => {
    let query = req.params.id
    try{
        const data = await axios(`https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
        res.json(data.data)
    }catch(error){
        console.error(error)
        res.json({error: "Error occured"})
    }
    
})


app.listen(port, () => {
    console.log(`App is running on PORT ${port}`)
})

