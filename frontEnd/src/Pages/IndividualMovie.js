
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


function IndividualMovie(){
    return(
        <div className="topRated-container">
            <div className="topRated-nav">
                <Navbar />
            </div>
            <div className="topRated-content-container">
                <h1>Top Rated Movies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto nostrum ducimus voluptatum atque. Voluptates sequi ipsa sapiente perspiciatis cumque aliquam velit non dolorum! Molestias eum consectetur autem quos beatae. </p>
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