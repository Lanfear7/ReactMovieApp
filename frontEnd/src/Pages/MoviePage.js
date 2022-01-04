import React, {
    useEffect,
    useState
} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import Movies from '../components/IndividualMovie'
const apiKey = '1fa26c8425e1e11c9424d0273f1e98f8';



import React, {
    useEffect,
    useState
} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import Movies from '../components/IndividualMovie'
import { 
    GetDataByGenre,
    fetchSingleMovieData
 } from '../API/context'
const apiKey = '1fa26c8425e1e11c9424d0273f1e98f8';


function SingleMovie(){

    const [movieID ,setMovieID] = useState('')
    const [movieData, setMovieData] = useState([])

    // setMovieID based on the movie clicked ${item.id}

    function TopRated(movieID){
        console.log(movieID)
        fetchSingleMovieData(movieID)
            .then(res =>{
                console.log(res)
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return(
        <div className="topRated-container">
            <div className="topRated-nav">
                <Navbar />
            </div>
            <div className="topRated-content-container">
                <h1>Movie Info</h1>

{/* 
                <h2>{item.title}</h2>
                <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}></img>
                <p className='rating'>{item.vote_average}/10</p>

                <button className='Favs' onClick = {addToFaves}>Add To Favorites</button> */}

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto nostrum ducimus voluptatum atque. Voluptates sequi ipsa sapiente perspiciatis cumque aliquam velit non dolorum! Molestias eum consectetur autem quos beatae. </p>
            </div>
            <Footer />
        </div>

    )
}

export default SingleMovie

// function MoviePage() {

//     const [movieData, setMovieData] = useState(null)

//     const id = 566525
//     // const { id } = useParams();

//     useEffect( () =>{
//         const fetchMovieData = async () => {
//             const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
//             const movieData = await res.json()
//             console.log(movieData)
//             setMovieData(movieData)
//         }
//         fetchMovieData();
//     }, [id])

//     return(
//         <section className="home=page">
//             {movieData !== null && <h2>{movieData.title}</h2>}
//         </section>
//     )
// }

// function MoviePage() {

//     const [movieData, setMovieData] = useState(null)

//     const id = 566525
//     // const { id } = useParams();

//     useEffect( () =>{
//         const fetchMovieData = async () => {
//             const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
//             const movieData = await res.json()
//             console.log(movieData)
//             setMovieData(movieData)
//         }
//         fetchMovieData();
//     }, [id])

//     return(
//         <section className="home=page">
//             {movieData !== null && <h2>{movieData.title}</h2>}
//         </section>
//     )
// }