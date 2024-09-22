import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-div'>
        <div className="footer-links">
            <a href="">Intellectual Property Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Security</a>
        </div>
        <div className="copyright">
            <p>© 2024 Diploy, Inc. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer