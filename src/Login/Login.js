import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../component/Navbar.js"
import "./Login.css"

function Login() {
    let navigate =useNavigate();
    return (
        <div className='main_LoginScreen'>
            <div className="right_loginSide">
            <form action="">
                <h1>Sign In</h1>
                <input  type="email" placeholder="User Id"/>
                <input  type="Password" placeholder="Password"/>
                <button type="submit" onClick={() => navigate("/mainscreen")}>Sign In</button>
                <h4><span className="signinscreen_new"></span>     
                <span className="signInScreen_log">Forgot Password ?</span>
                </h4>
                
            </form>
            </div>
            
        </div>
    )
}

export default Login
