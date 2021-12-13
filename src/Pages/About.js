import React from 'react'
import Navbar from '../components/Navbar'
import TMDB_logo from '../Public/Images/TMDb.jpg'
import Background from '../Public/Images/background.jpg'
import Footer from '../components/Footer'

function About() {
    return (
        <div className="about-container">
            {/*                                             Brennan, not sure what you want to set as bcg image 
            <div className="background-img">                For the about page, but here's some placeholder code for it 
                <img src={Background} />                    
            </div> */}                                           
                                                            
            <div className="about-nav">
                <Navbar />                                  
            </div>
            <div className="about-content-container">
                <h1>About Rewind</h1>
                    <p>Use Rewind to discover countless movies, from top rated and popular movies, to upcoming movies and ones that are currently playing.
                        View movie ratings and reviews, and keep track of your own personal favorites.
                    </p>

                <h1>Do I Need to Create an Account to Use Rewind?</h1>
                    <p>You don't need an account to navigate Rewind, but you'll need to register with Rewind in order to add movies to 
                        your favorites list, leave reviews, and have access to other Rewind features.
                    </p>
                
                <button>Sign Me Up!</button>                
                
                <h1>TMDb Attribution</h1>
                    <img src={TMDB_logo}></img>
                    <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            </div>
            <Footer />
        </div>
                                                            //Page contains Rewind logo that links back to Home page
                                                            //Page contains Navbar 
                                                            //Description of app
                                                            //TMDb logo & disclaimer message
                                                            //From assignment notes: 
                                                            //"TMDb logo should be placed in a way that does not give the appearance that your application is endorsed by TMDb"
    )
}

export default About