import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
  import Home from './Pages/Home';
  import About from './Pages/About';
  import TopRated from './Pages/TopRated';
  import SignUp from './Pages/SignUp';
  import SignIn from './Pages/SignIn';
  import NotFound from './Pages/NotFound';
  import './Public/StyleSheet/index.css'

function App() {
    document.title = "Home"
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/About" element={ <About />} />
                    <Route path="/TopRated" element={ <TopRated />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="*" element={ <NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
