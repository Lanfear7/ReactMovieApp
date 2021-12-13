import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movies from '../components/IndividualMovie'
const apiKey = '1fa26c8425e1e11c9424d0273f1e98f8';

function MoviePage() {

    const [movieData, setMovieData] = useState(null)

    const id = 566525
    // const { id } = useParams();

    useEffect( () =>{
        const fetchMovieData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            const movieData = await res.json()
            console.log(movieData)
            setMovieData(movieData)
        }
        fetchMovieData();
    }, [id])

    return(
        <section className="home=page">
            {movieData !== null && <h2>{movieData.title}</h2>}
        </section>
    )
}