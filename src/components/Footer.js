import React from 'react'

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const footerStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div className="footer" id="footer">
            <p style={footerStyle}>Developed by Fred Bian</p>
            <p style={footerStyle}>© 2022 Fred Bian</p>
            <a href="https://www.linkedin.com/in/tao-bian-9aa137239/"><img src="../images/linkedin.png" alt="LinkedIn" style={imgStyle}></img></a>
            <a href="https://github.com/Fredbian?tab=repositories"><img src="../../images/github.png" alt="Github" style={imgStyle}></img></a>
            <a href="https://www.facebook.com/profile.php?id=100074467428814"><img src="../images/facebook_icon.png" alt="Facebook" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer

