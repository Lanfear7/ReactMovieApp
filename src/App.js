import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
  import Home from './Pages/Home';
  import About from './Pages/About';
  import NotFound from './Pages/NotFound';
  import './Public/StyleSheet/index.css'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/TopRated" element={ <About />} />
                    <Route path="*" element={ <NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
