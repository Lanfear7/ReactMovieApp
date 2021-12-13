import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../Public/Images/background.jpg'
import Footer from '../components/Footer'

function TopRated(){
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

export default TopRated