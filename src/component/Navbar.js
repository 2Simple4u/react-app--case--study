import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate();
    return (
        <div className='main_navbar'>
            <div className='left_navbar'>
                <h2 onClick={() => navigate("/")}>i-Transform</h2>
            </div>
            <div className='right_navbar'>
                <div className='right_navbar_text'>
                    <h2 onClick={() => navigate("/login")}>Login</h2>
                <span className=""> <AccountCircleIcon fontSize='large'/></span>
                </div> 
            </div>
            
        </div>
    )
}

export default Navbar
