import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../Public/Images/background.jpg'
import Footer from '../components/Footer'
import SignIn from '../Pages/SignIn'
import {Link} from 'react-router-dom'
import '../Public/StyleSheet/signUp.css'

function SignUp(){
    return(
        <div className="signUp-container">
            <div className="signUp-nav">
                <Navbar />
            </div>
            <div className="signUp-content-container">
                <form>
                    <h1>Sign Up</h1>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Email" name="email" id="email" required/>

                    <label for="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="First Name" name="first-name" id="first-name" required/>

                    <label for="last-name"><b>Last Name</b></label>
                    <input type="text" placeholder="Last Name" name="last-name" id="last-name" required/>

                    <label for="pword"><b>Password</b></label>
                    <input type="password" placeholder="Password" name="pword" id="pword" required/>
                    <label for="confirm-pword"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="confirm-pword" id="confirm-pword" required/>

                    <button type="submit" class="registerbtn">Make My Account!</button>
                    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
                </form>
                <div class="signIn-content-container">
                    <p>Already have an account? <Link to="/Signin">Sign In</Link>.</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default SignUp