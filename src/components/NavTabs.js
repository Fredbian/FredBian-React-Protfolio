import React from 'react';
import '../style/NavTabs.css'


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='navbar'>
            <h1 className='brand'>Fred Bian</h1>
            {/* <ul className="nav nav-tabs"> */}
            <ul className="test">

                <li className="link">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="link">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="link">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="link">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs;

