export async function GetDataByGenre(id){

    ///api.themoviedb.org/3/movie/76324?api_key=1fa26c8425e1e11c9424d0273f1e98f8
    //[^aip url] / ^[dont change 3] / ^[dont change movie] / ^[movie index to select] / ^[API key]
    //https://api.themoviedb.org/3/movie/popular?api_key=1fa26c8425e1e11c9424d0273f1e98f8&page=1 gets popular movies
    //https://api.themoviedb.org/3/genre/movie/list?api_key=1fa26c8425e1e11c9424d0273f1e98f8 returns all avalible genres
    //https://api.themoviedb.org/3/discover/movie?api_key=1fa26c8425e1e11c9424d0273f1e98f8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate select based on genre (&with_genres=27&)
    try{
        let data = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1fa26c8425e1e11c9424d0273f1e98f8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .catch(err => {
            console.log(err)})
    }catch (error){
        console.log(error)
    }
    
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
    Everything that is commented out shouldnt be there
    the api key ill have to look into be we shouldnt store it as plain text on the client side
    all our fetch calls need to be in a try catch incase the fetch dosent work it will fall into our catch opposed to crashing our app 
*/ 

//const baseMovieURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = '1fa26c8425e1e11c9424d0273f1e98f8';
//const venom = 'https://api.themoviedb.org/3/movie/580489?api_key=1fa26c8425e1e11c9424d0273f1e98f8&language=en-US'


const fetchMovies = async () => {
    try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0, 12);
        //console.log(first12Movies); 
        
        return first12Movies
    }catch (error){
        console.log(error)
    }

    
}

export default fetchMovies

export const fetchSignleMovieData = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    const movieData = await res.json()
    console.log(movieData)

    return movieData
}

