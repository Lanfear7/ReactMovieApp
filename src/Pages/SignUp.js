import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../Public/Images/background.jpg'
import Footer from '../components/Footer'
import SignIn from '../Pages/SignIn'

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
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label for="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="first-name" id="first-name" required/>

                    <label for="last-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="last-name" id="last-name" required/>

                    <label for="pword"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pword" id="pword" required/>
                    <label for="confirm-pword"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="confirm-pword" id="confirm-pword" required/>

                    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Make My Account!</button>
                </form>
  
            <div class="signIn-content-container">
                <p>Already have an account? <a href={SignIn}>Sign in</a>.</p>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default SignUp