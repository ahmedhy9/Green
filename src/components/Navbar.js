import React from 'react'
import './Navbar.css'
function Navbar(){
    return(
        <div className='navbar'>
            {/* navbar */}
            <div className='nav-logo'>li</div>
            <ul className='nav-item'>
                <li><a href="#">Work</a></li>        
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        
            <div className='navbar-btn'>
                <button>Contact</button></div>
        </div>
        // /nabar
    )
}

export default Navbar