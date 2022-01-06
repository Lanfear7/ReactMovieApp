import React, {
    useEffect,
    useState
} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from '../API/context'
import '../Public/StyleSheet/IndividualMovie.css'




function IndividualMovie(){
    const { id } = useParams()
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        fetchSingleMovie(id)
            .then(res =>{
                console.log(res)
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="singleMovie-container">
            <Navbar />
            <div className="singleMovie-content-container">
                <h1>Movie Info</h1>
                <div>
                    <h2>{movieData.title}</h2>
                    <div>
                        <img src={"https://image.tmdb.org/t/p/original"+movieData.poster_path}></img>
                    </div>
                    <p className='date'>{movieData.release_date}</p>
                    <p className='rating'>{movieData.vote_average}/10</p>

                    <div>
                        <p className='overview'>{movieData.overview}</p>
                    </div>
                    <button className='Favs'>Add To Favorites</button>
                </div>
                
            </div>
            <Footer />
        </div>

    )
}

export default IndividualMovie

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


// function SingleMovie(){

//     const [movieID ,setMovieID] = useState('')
//     const [movieData, setMovieData] = useState([])

//     // setMovieID based on the movie clicked ${item.id}

//     function TopRated(movieID){
//         console.log(movieID)
//         fetchSingleMovieData(movieID)
//             .then(res =>{
//                 console.log(res)
//                 setMovieData(res)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }

//     return(
//         <div className="topRated-container">
//             <div className="topRated-nav">
//                 <Navbar />
//             </div>
//             <div className="topRated-content-container">
//                 <h1>Movie Info</h1>

// {/* 
//                 <h2>{item.title}</h2>
//                 <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}></img>
//                 <p className='rating'>{item.vote_average}/10</p>

//                 <button className='Favs' onClick = {addToFaves}>Add To Favorites</button> */}

//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto nostrum ducimus voluptatum atque. Voluptates sequi ipsa sapiente perspiciatis cumque aliquam velit non dolorum! Molestias eum consectetur autem quos beatae. </p>
//             </div>
//             <Footer />
//         </div>

//     )
// }

// export default SingleMovie

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