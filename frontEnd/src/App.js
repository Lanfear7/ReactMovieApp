import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
  import Home from './Pages/Home';
  import About from './Pages/About';
  import FavoriteMovies from './Pages/FavoriteMovies';
  import SignUp from './Pages/SignUp';
  import SignIn from './Pages/SignIn';
  import IndividualMovie from './Pages/IndividualMovie';
  import NotFound from './Pages/NotFound';
  import './Public/StyleSheet/index.css'
import Navbar from './components/Navbar';
import Genres from './Pages/Genres';

function App() {
    document.title = "Home"
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/About" element={ <About /> } />
                    <Route path="/Favorites" element={ <FavoriteMovies /> } />
                    <Route path="/Genres" element={ <Genres /> } />
                    <Route path="/SignUp" element={<SignUp /> } />
                    <Route path="/SignIn" element={<SignIn /> } />
                    <Route path="/IndividualMovie:id" element={<IndividualMovie /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
