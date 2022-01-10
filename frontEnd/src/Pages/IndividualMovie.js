import React, {
    useEffect,
    useState
} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from '../API/context'
import '../Public/StyleSheet/IndividualMovie.css'
import { set } from 'express/lib/application';

let index = 0

function IndividualMovie(){
    const { id } = useParams()
    const [movieData, setMovieData] = useState([])
    const [isSaved, setIsSaved] = useState(false)
    

    useEffect(() => {
        fetchSingleMovie(id)
            .then(res =>{
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const [favorite, setFavorite] = useState([]) 
    function addToFaves(e){

        let movieCard = e.target.parentNode
        let h2TagName = movieCard.childNodes[0]
        let imgTag = movieCard.childNodes[1].childNodes[0].src
        let ratingPTag = movieCard.childNodes[3]
        let releasePTag  = movieCard.childNodes[2]
        let overview = movieCard.childNodes[4].childNodes[0]


        const movie = {

            'movieTitle': h2TagName.innerHTML,
            'moviePoster': imgTag,
            'movieRating':  ratingPTag.innerHTML,
            'movieRelease': releasePTag.innerHTML,
            'movieOverview': overview.innerHTML

        }

        check(movie)

        if(!isSaved){
            localStorage.setItem(`movieCard${index}`, JSON.stringify(movie))
            index++
            setFavorite(movie)

        }
    }

    function check(movie){
        for(let i =0; i < localStorage.length; i++){
            let storageItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if(storageItem.movieTitle == movie.movieTitle){
                setIsSaved(true)
            }
        }
    }
    
    function removeFromFaves(e){
        let movieCard = e.target.parentNode.parentNode
        let h2TagName = movieCard.childNodes[0]

        for(let i = 0; i < localStorage.length; i++){
            let storageItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if(h2TagName.innerHTML == storageItem.movieTitle){
                localStorage.removeItem(localStorage.key(i))
            }
        }
    }

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
                    {favorite == false
                        ?(<button className='Favs' onClick ={addToFaves}>Add To Favorites</button>)
                        :<div>
                            {!isSaved
                                ?<button className='Favs'>Added!</button>
                                :<button className='Favs' onClick={removeFromFaves}>Remove From Favorites</button>
                                }
                        </div>
                    }
                    
                </div>
                
            </div>
            <Footer />
        </div>

    )
}

export default IndividualMovie
