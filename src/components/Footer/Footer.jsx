import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-div' id='footer'>
            <footer>
                <div>
                    <p>&copy; 2024 Portfolio Website. All rights reserved.</p>
                    <nav className='footer-nav'>
                        <a href="#home">Home </a>
                        <a href="#skills">About Us</a>
                        <a href="#contect">Contact</a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer