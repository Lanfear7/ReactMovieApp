export async function GetDataByGenre(id){

    ///api.themoviedb.org/3/movie/76324?api_key=1fa26c8425e1e11c9424d0273f1e98f8
    //[^aip url] / ^[dont change 3] / ^[dont change movie] / ^[movie index to select] / ^[API key]
    //https://api.themoviedb.org/3/movie/popular?api_key=1fa26c8425e1e11c9424d0273f1e98f8&page=1 gets popular movies
    //https://api.themoviedb.org/3/genre/movie/list?api_key=1fa26c8425e1e11c9424d0273f1e98f8 returns all avalible genres
    //https://api.themoviedb.org/3/discover/movie?api_key=1fa26c8425e1e11c9424d0273f1e98f8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate select based on genre (&with_genres=27&)
    try{
        let data = await fetch(`http://localhost:3001/genre/${id}`)
        let movies = await data.json()
        return movies
    }catch (error){
        console.log(error)
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// by polularity
export const fetchPopularMovies = async () => {
    try{
        const res = await fetch(`http://localhost:3001/popularMovies`);
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0, 12);
        //console.log(first12Movies); 
        
        return first12Movies
    }catch (error){
        console.log(error)
    }

    
}

export default fetchPopularMovies


// by Top Rated
export const fetchTopRatedMovies = async () => {
    try{
        const res = await fetch(`http://localhost:3001/topRated`);
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0, 12);
        //console.log(first12Movies); 
        
        return first12Movies
    }catch (error){
        console.log(error)
    }
}



// by Now Playing. Get a list of movies in theatres
export const fetchNowPlayingMovies = async () => {
    try{
        const res = await fetch(`http://localhost:3001/nowPlaying`);
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0, 12);
        //console.log(first12Movies); 
        
        return first12Movies
    }catch (error){
        console.log(error)
    }
}


// by Up Coming
export const fetchUpComingMovies = async () => {
    try{
        const res = await fetch(`http://localhost:3001/upComingMovies`);
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0, 12);
        //console.log(first12Movies); 
        
        return first12Movies
    }catch (error){
        console.log(error)
    }
}



// by singlemovie
export const fetchSingleMovieData = async (id) => {
    try{
        const res = await fetch(`http://localhost:3001/movie/${id}`)
        const movieData = await res.json()
        //console.log(movieData)
    
        return movieData
    } catch (error){
        console.log(error)
    }
}

